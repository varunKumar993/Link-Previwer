import React, { useEffect, useState } from "react";
import "./App.css";
import { encode } from "qss";
import { motion } from "framer-motion";

const LinkPreviewer = ({ url, children }) => {
  const width = 200;
  const height = 125;

  const [isMounted, setIsMounted] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const params = encode({
    url,
    screenshot: true,
    meta: false,
    embed: "screenshot.url",
    colorScheme: "dark",
    "viewport.isMobile": true,
    "viewport.width": width * 3,
    "viewport.height": height * 3,
  });

  const src = `https://api.microlink.io/?${params}`;

  const dropIn = {
    hidden: { y: "-10vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: { y: "-100vh", opacity: 0 },
  };

  return (
    <div
      style={{ position: "relative", display: "inline-block" }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {isMounted && show && (
        <motion.img
          variants={dropIn}
          animate="visible"
          initial="hidden"
          exit="exit"
          src={src}
          width={width}
          height={height}
          className="image"
          style={{
            position: "absolute",
            top: "150px",
            left: "-60px",
            zIndex: 10,
            backgroundColor: "transparent",
          }}
        />
      )}
    </div>
  );
};

export default LinkPreviewer;
