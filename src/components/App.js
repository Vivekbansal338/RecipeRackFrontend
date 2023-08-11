import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "./AppLayout";
import { SearchResultPage } from "../pages/SearchResultPage";
import { HomePage } from "../pages/HomePage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "react-redux";
import configureAppStore from "../redux/store.js";
import { PersistGate } from "redux-persist/integration/react";
import { FavouritesPage } from "../pages/FavouritesPage";
import { CartPage } from "../pages/CartPage";
import { RecipeDetailsPage } from "../pages/RecipeDetailsPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { OrderHistoryPage } from "../pages/OrderHistoryPage";
import { LoginSignupPage } from "../pages/LoginSignupPage";
import { MyprofilePage } from "../pages/MyprofilePage";
import { PageNotFound } from "../pages/PageNotFound";
import { ToastContainer } from "react-toastify";
import { MyPurchasesPage } from "../pages/MyPurchasesPage";
import Support from "../pages/Support";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {},
  },
});

function App() {
  const { store, persistor } = configureAppStore();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <BrowserRouter>
            <ToastContainer
              position="top-center"
              autoClose={250}
              hideProgressBar={true}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            <Routes>
              <Route element={<AppLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route
                  path="/searchresults/:recipesearchquery"
                  element={<SearchResultPage />}
                />
                <Route
                  path="/recipedetails/:recipeid"
                  element={<RecipeDetailsPage />}
                />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/favourites" element={<FavouritesPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/orderhistory" element={<OrderHistoryPage />} />
                <Route path="/loginsignup" element={<LoginSignupPage />} />
                <Route path="/myprofile" element={<MyprofilePage />} />
                <Route path="/mypurchases" element={<MyPurchasesPage />} />
                <Route path="/support" element={<Support />} />
                <Route path="*" element={<PageNotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
