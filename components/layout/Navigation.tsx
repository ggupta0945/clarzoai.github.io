"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { NAV_LINKS } from "@/lib/nav";
import { SITE, cn } from "@/lib/utils";

export function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "py-2.5" : "py-4 sm:py-5"
      )}
    >
      <Container>
        <div
          className={cn(
            "flex items-center justify-between rounded-2xl px-4 sm:px-5 py-2.5 transition-all duration-500",
            scrolled
              ? "border border-line bg-white/85 backdrop-blur-xl shadow-card"
              : "border border-transparent"
          )}
        >
          <Link href="/" aria-label="Clarzo.ai home" className="flex items-center gap-2 shrink-0">
            <Logo className="h-8 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-3 py-2 text-sm font-medium transition-colors duration-300",
                    active ? "text-ink" : "text-ink-dim hover:text-ink"
                  )}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3 -bottom-0.5 h-px bg-accent-light"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Button href={SITE.loginUrl} variant="ghost" size="sm">
              Login
            </Button>
            <Button href={SITE.loginUrl} variant="primary" size="sm">
              Review My Portfolio
            </Button>
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-ink-dim hover:text-ink hover:bg-bg-elevated transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="md:hidden mt-3 px-4"
          >
            <Container>
              <div className="glass p-5 flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "px-3 py-3 rounded-lg text-sm font-medium transition-colors",
                      pathname === link.href
                        ? "bg-bg-elevated text-ink"
                        : "text-ink-dim hover:bg-bg-elevated hover:text-ink"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="h-px bg-line my-2" />
                <Button href={SITE.loginUrl} variant="ghost" size="sm" className="justify-center">
                  Login
                </Button>
                <Button href={SITE.loginUrl} variant="primary" size="sm" className="justify-center">
                  Review My Portfolio
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
