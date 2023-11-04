import { Button, Toast } from "@douyinfe/semi-ui";
import { useState, useEffect, useRef, useCallback } from "react";
import styles from "./index.module.css";
import { useTranslation } from "next-i18next";

export default function App() {
  const [count, setCount] = useState(0);
  const [t] = useTranslation();
  const onClick = useCallback(() => {
    Toast.info({
      content: t("hello"),
    });
    setCount(count + 1);
  }, [count]);
  return (
    <main className={styles.main}>
      <Button onClick={onClick}>
        {t("hello")} {count}
      </Button>
    </main>
  );
}
