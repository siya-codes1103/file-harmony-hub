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
import LeadManagement from "./pages/admin/LeadManagement";
import SyncFeedback from "./pages/admin/SyncFeedback";
import ErrorResolution from "./pages/admin/ErrorResolution";
import TaskControl from "./pages/admin/TaskControl";
import TaskDetail from "./pages/admin/TaskDetail";
import AdminNotifications from "./pages/admin/AdminNotifications";

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

          {/* Admin Auth Pages */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/forgot-password" element={<AdminForgotPassword />} />
          <Route path="/admin/reset-password" element={<AdminResetPassword />} />

          {/* Admin Dashboard Pages */}
          <Route element={<AdminLayout />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/ca-management" element={<CAManagement />} />
            <Route path="/admin/ca-profile/:id" element={<CAProfileDetail />} />
            <Route path="/admin/lead-errors" element={<LeadErrors />} />
            <Route path="/admin/lead-management" element={<LeadManagement />} />
            <Route path="/admin/sync-feedback" element={<SyncFeedback />} />
            <Route path="/admin/error-resolution" element={<ErrorResolution />} />
            <Route path="/admin/task-control" element={<TaskControl />} />
            <Route path="/admin/task-detail/:id" element={<TaskDetail />} />
            <Route path="/admin/notifications" element={<AdminNotifications />} />
            <Route path="/admin/student-tracking" element={<div className="p-6"><h1 className="text-2xl font-bold text-[hsl(30,5%,15%)]">Student Tracking</h1><p className="text-sm text-[hsl(30,5%,50%)] mt-2">Coming soon...</p></div>} />
            <Route path="/admin/withdrawals" element={<div className="p-6"><h1 className="text-2xl font-bold text-[hsl(30,5%,15%)]">Withdrawals Management</h1><p className="text-sm text-[hsl(30,5%,50%)] mt-2">Coming soon...</p></div>} />
            <Route path="/admin/settings" element={<div className="p-6"><h1 className="text-2xl font-bold text-[hsl(30,5%,15%)]">Admin Settings</h1><p className="text-sm text-[hsl(30,5%,50%)] mt-2">Coming soon...</p></div>} />
            <Route path="/admin/roles" element={<div className="p-6"><h1 className="text-2xl font-bold text-[hsl(30,5%,15%)]">Admin Roles</h1><p className="text-sm text-[hsl(30,5%,50%)] mt-2">Coming soon...</p></div>} />
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
