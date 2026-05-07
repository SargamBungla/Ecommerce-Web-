// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
// import { AppProvider } from "./context/productContext.jsx";
// import { FilterContextProvider } from "./context/filterContext.jsx";
// import { CartProvider } from "./context/cartContext.jsx";
// import { Auth0Provider } from "@auth0/auth0-react";
// import { ThemeProvider } from "./context/themeContext.jsx";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <Auth0Provider
//       domain="dev-kn8qdvk8gt8jkerg.us.auth0.com"
//       clientId="kZMEZaqoVVhqZrHRrCf2eBAOAtOglMN0"
//       authorizationParams={{ redirect_uri: window.location.origin }}
//     >
//       <ThemeProvider>
//         <AppProvider>
//           <FilterContextProvider>
//             <CartProvider>
//               <App />
//             </CartProvider>
//           </FilterContextProvider>
//         </AppProvider>
//       </ThemeProvider>
//     </Auth0Provider>
//   </StrictMode>,
// );
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import { ThemeProvider } from "./context/themeContext.jsx"; // ✅ ye same rahega
import { Provider } from "react-redux"; // ✅ naya
import store from "./store/Store.jsx"; // ✅ naya

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-kn8qdvk8gt8jkerg.us.auth0.com"
      clientId="kZMEZaqoVVhqZrHRrCf2eBAOAtOglMN0"
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <ThemeProvider>
        <Provider store={store}>
          {" "}
          {/* ✅ naya */}
          <App />
        </Provider>
      </ThemeProvider>
    </Auth0Provider>
  </StrictMode>,
);
