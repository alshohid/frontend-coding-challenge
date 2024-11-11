import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import { Product } from "@/types";
import { PRODUCTS_DATA } from "@/data/productsData";

export const useProductModal = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const openModal = useCallback(
    (product: Product) => {
      setSelectedProduct(product);
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set("productId", product.id);
      router.push(`${pathname}?${newSearchParams.toString()}`);
    },
    [pathname, router, searchParams]
  );

  const closeModal = useCallback(() => {
    setSelectedProduct(null);
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.delete("productId");
    router.push(`${pathname}?${newSearchParams.toString()}`);
  }, [pathname, router, searchParams]);

  useEffect(() => {
    const productId = searchParams.get("productId");
    if (productId) {
      const product = PRODUCTS_DATA.find((p) => p.id === productId);
      if (product) {
        setSelectedProduct(product);
      }
    }
  }, [searchParams]);

  return { selectedProduct, openModal, closeModal };
};
