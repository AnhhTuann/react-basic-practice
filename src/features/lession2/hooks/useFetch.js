import { useState, useEffect } from "react";

/**
 * Custom Hook: useFetch
 * Dùng để gọi API tự động mỗi khi URL thay đổi (Xử lý Side-Effect).
 * Tích hợp sẵn quản lý các State: dữ liệu (Data), trạng thái chờ (Loading), và Lỗi (Error).
 * Chuẩn bài cho kiến thức "useEffect" của Lesson 2.
 *
 * @param {string} url - Đường dẫn API cần gọi
 * @returns {object} { data, loading, error, refetch }
 */
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    if (!url) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Lỗi kết nối API! Status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Lifecycle: Component Mounted hoặc Dependencies (url) thay đổi
    fetchData();

    // (Tuỳ chọn Nâng cao): Return Cleanup Function
    // return () => {
    //   Tiến hành logic dọn dẹp (Vd: Dùng AbortController để huỷ call mạng nếu user chuyển trang ngay khi đang load)
    // };
  }, [url]);

  return { data, loading, error, refetch: fetchData };
};

export default useFetch;
