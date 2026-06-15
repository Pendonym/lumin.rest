'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';

export interface CartItem {
  productId: number;
  variantId: number;
  quantity: number;
}

export interface CheckoutOptions {
  cart: CartItem[];
  shopId: number;
  modal?: boolean;
  scrollTop?: boolean;
}

export interface SellAuthEmbedHook {
  checkout: (options: CheckoutOptions) => Promise<void>;
  isLoading: boolean;
  closeModal: () => void;
  overlay: React.ReactElement | null;
}

function LoadingOverlay() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background">
      <div className="size-10 animate-spin rounded-full border-2 border-[#f8bfd4] border-t-transparent" />
      <p className="mt-4 text-sm text-zinc-400">Setting up checkout...</p>
    </div>,
    document.body
  );
}

function CheckoutModal({ url, onClose }: { url: string; onClose: () => void }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-[#141414] text-white rounded-xl max-w-[98vw] md:max-w-[32rem] w-full max-h-[90vh] overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-6 right-[1.125rem] z-10 p-1 text-white hover:text-gray-300 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" />
          </svg>
        </button>
        <div className="w-full h-full">
          <iframe
            src={url}
            title="SellAuth Embed"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="payment; clipboard-write"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            className="w-full h-[46rem] md:h-[52rem] border-0"
          />
        </div>
      </div>
    </div>,
    document.body
  );
}

export function useSellAuthEmbed(): SellAuthEmbedHook {
  const [isLoading, setIsLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(false);
  const [modalUrl, setModalUrl] = useState<string | null>(null);

  const closeModal = useCallback(() => {
    setModalUrl(null);
  }, []);

  const checkout = useCallback(async ({ cart, shopId, modal = true, scrollTop = true }: CheckoutOptions) => {
    if (isLoading) return;

    setIsLoading(true);
    setPageLoading(true);

    try {
      const response = await fetch('/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cart, shopId }),
      });

      const data = await response.json();

      if (!response.ok || data.error) {
        throw new Error(data.error || 'Checkout request failed');
      }

      if (modal) {
        setPageLoading(false);
        setModalUrl(data.url);
        if (scrollTop) {
          window.scrollTo(0, 0);
        }
      } else {
        setPageLoading(false);
        window.open(data.url, '_blank');
      }
    } catch (error) {
      setPageLoading(false);
      console.error(error instanceof Error ? error.message : 'An error occurred during checkout');
    } finally {
      setIsLoading(false);
    }
  }, [isLoading]);

  return {
    checkout,
    isLoading,
    closeModal,
    overlay: (
      <>
        {pageLoading && <LoadingOverlay />}
        {modalUrl ? <CheckoutModal url={modalUrl} onClose={closeModal} /> : null}
      </>
    ),
  };
}

export interface SellAuthButtonProps {
  cart: CartItem[];
  shopId: number;
  modal?: boolean;
  scrollTop?: boolean;
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
}

export function SellAuthButton({
  cart,
  shopId,
  modal = true,
  scrollTop = true,
  className = '',
  children,
  disabled = false,
}: SellAuthButtonProps) {
  const { checkout, isLoading, overlay } = useSellAuthEmbed();

  const handleClick = () => {
    checkout({ cart, shopId, modal, scrollTop });
  };

  const defaultClassName = "inline-flex items-center justify-center rounded-md bg-gray-800/50 px-4 py-2 text-sm font-medium duration-100 disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-700 hover:text-white transition-colors backdrop-blur-md cursor-pointer";

  return (
    <>
      <button
        type="button"
        className={className || defaultClassName}
        onClick={handleClick}
        disabled={disabled || isLoading}
      >
        {children || (
          <>
            <span>Buy Now</span>
            {!isLoading && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 ml-2"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M230.14,58.87A8,8,0,0,0,224,56H62.68L56.6,22.57A8,8,0,0,0,48.73,16H24a8,8,0,0,0,0,16h18L67.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,160,204a28,28,0,1,0,28-28H91.17a8,8,0,0,1-7.87-6.57L80.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,230.14,58.87ZM104,204a12,12,0,1,1-12-12A12,12,0,0,1,104,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,200,204Zm4-74.57A8,8,0,0,1,196.1,136H77.22L65.59,72H214.41Z" />
              </svg>
            )}
            {isLoading && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 ml-2 animate-spin"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M232,128a104,104,0,0,1-208,0c0-41,23.81-78.36,60.66-95.27a8,8,0,0,1,6.68,14.54C60.15,61.59,40,93.27,40,128a88,88,0,0,0,176,0c0-34.73-20.15-66.41-51.34-80.73a8,8,0,0,1,6.68-14.54C208.19,49.64,232,87,232,128Z" />
              </svg>
            )}
          </>
        )}
      </button>
      {overlay}
    </>
  );
}
