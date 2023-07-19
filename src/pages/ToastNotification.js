import React, { useState, useEffect } from "react";
import "./Toast.css";

function ToastNotification() {
    return (
        <div className="toast-alert">
            <p>장바구니에 추가 되었습니다.</p>
        </div>
    );
}

export { ToastNotification }