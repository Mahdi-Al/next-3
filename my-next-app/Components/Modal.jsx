"use client";
import { useCallback, useRef, useEffect, MouseEventHandler } from "react";
import { useRouter } from "next/router";
export default function Modal({ childern }) {
  const overlay = useRef(null);

  const wrapper = useRef(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);
  const onClick = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        onDismiss && onDismiss();
      }
    },
    [onDismiss, overlay, wrapper]
  );
}
