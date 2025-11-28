import { useEffect } from "react";
import { motion } from "framer-motion";

function Footer() {
  // We use useEffect to inject the TikTok script after the component mounts
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <footer className="relative bg-neutral text-neutral-content px-4 pt-0 pb-12">
      {/* Decorative Top Curve */}
      <div className="absolute rounded-t-[50%] -top-12 left-0 bg-neutral w-full h-12" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="max-w-screen-lg mx-auto mt-12"
      >
        {/* --- TIKTOK EMBED SECTION (Replaces Main Links) --- */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ delay: 0.2 }}
          className="flex justify-center w-full mb-8"
        >
          <blockquote
            className="tiktok-embed"
            cite="https://www.tiktok.com/@lumeebooth"
            data-unique-id="lumeebooth"
            data-embed-type="creator"
            style={{ maxWidth: "780px", minWidth: "288px" }}
          >
            <section>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.tiktok.com/@lumeebooth?refer=creator_embed"
              >
                @lumeebooth
              </a>
            </section>
          </blockquote>
        </motion.div>

        {/* --- LEGAL LINKS & COPYRIGHT --- */}
        <aside className="flex flex-col items-center justify-between mt-4 w-full overflow-hidden md:flex-row lg:overflow-visible border-t border-neutral-content/10 pt-8">
          
          <div className="flex gap-4 mb-4 md:m-0">
            <motion.a
              variants={{
                hidden: { opacity: 0, scale: 0.4 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ delay: 0.25 }}
              className="font-bold text-primary hover:text-primary/50 lg:whitespace-nowrap"
              href="/terms-and-conditions"
            >
              Terms & conditions
            </motion.a>
            <motion.a
              variants={{
                hidden: { opacity: 0, scale: 0.4 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ delay: 0.5 }}
              className="font-bold text-primary hover:text-primary/50 lg:whitespace-nowrap"
              href="/privacy-policy"
            >
              Privacy policy
            </motion.a>
            <motion.a
              variants={{
                hidden: { opacity: 0, scale: 0.4 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ delay: 0.75 }}
              className="font-bold text-primary hover:text-primary/50 lg:whitespace-nowrap"
              href="/cookies-policy"
            >
              Cookies policy
            </motion.a>
          </div>

          <motion.p
            variants={{
              hidden: { opacity: 0, scale: 0.4 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ delay: 1 }}
            className="mt-0.5 md:ml-4 md:whitespace-nowrap text-sm opacity-60"
          >
            All rights reserved © {new Date().getFullYear()}
          </motion.p>
        </aside>
      </motion.div>
    </footer>
  );
}

export default Footer;