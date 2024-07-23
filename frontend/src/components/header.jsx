import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  return (
    <div>
      <header class="fixed-top text-bg-dark d-flex flex-wrap align-items-center justify-content-between justify-content-md-between py-3 mb-4 border-bottom">
        <div class="col-md-3 mb-2 mb-md-0">
          <a
            href="/"
            class="d-inline-flex link-body-emphasis text-decoration-none text-white p-3"
          >
            Ciao qui andra il logo del ristorante
          </a>
        </div>

        <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <a href="#" class="nav-link px-2 text-white ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-house "
                viewBox="0 0 16 16"
              >
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
              </svg>
              Home
            </a>
          </li>
          <li>
            <a href="#" class="nav-link px-2 text-white ">
              Cucina & Vini
            </a>
          </li>
          <li>
            <a href="#" class="nav-link px-2 text-white ">
              Gallery
            </a>
          </li>
          <li>
            <a href="#" class="nav-link px-2 text-white ">
              Booking & Contatti
            </a>
          </li>
          <li>
            <a href="#" class="nav-link px-2 text-white ">
              FAQ
            </a>
          </li>
        </ul>

        <div class="col-md-3 text-end">
          <button type="button" class=" btn btn-dark me-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-person"
              viewBox="0 0 16 16"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
            </svg>
            Login
          </button>
          <button type="button" class="btn btn-dark">
            Sign-up
          </button>
        </div>
      </header>
    </div>
  );
}
