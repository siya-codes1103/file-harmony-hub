import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Unauthorized from "./pages/Unauthorized";
import EmailVerification from "./pages/EmailVerification";
import ProfileSetup from "./pages/ProfileSetup";
import ForgotPassword from "./pages/ForgotPassword";
import SessionExpired from "./pages/SessionExpired";
import DashboardLayout from "./components/layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Leads from "./pages/Leads";
import Onboarding from "./pages/Onboarding";
import OnboardingComplete from "./pages/OnboardingComplete";
import Resources from "./pages/Resources";
import Training from "./pages/Training";
import Community from "./pages/Community";
import SettingsPage from "./pages/SettingsPage";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Auth Pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="/verify-email" element={<EmailVerification />} />
          <Route path="/profile-setup" element={<ProfileSetup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/session-expired" element={<SessionExpired />} />

          {/* Dashboard Pages with Sidebar */}
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/onboarding-complete" element={<OnboardingComplete />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/training" element={<Training />} />
            <Route path="/community" element={<Community />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/templates" element={<Index />} />
          </Route>

          {/* Default redirect to login */}
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
