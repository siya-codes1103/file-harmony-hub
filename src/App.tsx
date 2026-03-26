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
import Students from "./pages/Students";
import StudentDetail from "./pages/StudentDetail";
import Earnings from "./pages/Earnings";
import Withdraw from "./pages/Withdraw";
import Rewards from "./pages/Rewards";
import Leaderboard from "./pages/Leaderboard";
import Onboarding from "./pages/Onboarding";
import OnboardingComplete from "./pages/OnboardingComplete";
import Resources from "./pages/Resources";
import Training from "./pages/Training";
import Community from "./pages/Community";
import SettingsPage from "./pages/SettingsPage";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import Promotions from "./pages/Promotions";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Admin Pages
import AdminLayout from "./components/admin/AdminLayout";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminForgotPassword from "./pages/admin/AdminForgotPassword";
import AdminResetPassword from "./pages/admin/AdminResetPassword";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CAManagement from "./pages/admin/CAManagement";
import CAProfileDetail from "./pages/admin/CAProfileDetail";
import LeadErrors from "./pages/admin/LeadErrors";

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
            <Route path="/students" element={<Students />} />
            <Route path="/students/:id" element={<StudentDetail />} />
            <Route path="/earnings" element={<Earnings />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/onboarding-complete" element={<OnboardingComplete />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/training" element={<Training />} />
            <Route path="/community" element={<Community />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/promotions" element={<Promotions />} />
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
