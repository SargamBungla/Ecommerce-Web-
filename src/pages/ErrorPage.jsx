import { useNavigate } from "react-router-dom";

export const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-9xl font-bold text-purple-600">404</h1>
      <h2 className="text-3xl font-semibold text-gray-800 mt-4">
        Page Not Found
      </h2>
      <p className="text-gray-500 mt-2 mb-8">
        Oops! The page you're looking for doesn't exist.
      </p>

      <button
        onClick={handleGoBack}
        className="bg-purple-600 text-white px-8 py-3 rounded-md hover:bg-purple-700 transition font-semibold"
      >
        Go Back
      </button>
    </div>
  );
};
