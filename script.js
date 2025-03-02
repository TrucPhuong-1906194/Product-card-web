document.addEventListener("DOMContentLoaded", function () {                             //Đảm bảo rằng mã JavaScript chỉ chạy sau khi toàn bộ tài liệu HTML đã được tải xong.
    // Select (lấy phần tử)                                                             // Sự kiện kích hoạt khi DOM (Document Object Model) đã sẵn sàng
    const buyNowButton = document.querySelector(".card_action button:first-child");     // Tìm phần tử bằng CSS selector.
    const addCartButton = document.querySelector(".card_action button:last-child");

    // Add event listeners
    buyNowButton.addEventListener("click", function () {                                // Khi nút được "click" chạy hàm function
        alert("You've successfully clicked on 'Buy Now'");                              // Hiển thị trên thông báo của trang
    });

    addCartButton.addEventListener("click", function () {// Tương tự như trên, nhưng lần này là nút "Add Cart" được click
        alert("You've added this item to your cart!");
    });
});
