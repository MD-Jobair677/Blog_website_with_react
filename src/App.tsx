import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Auth/Login";
import Registration from "./pages/Auth/Registration";
import AddPost from "./components/dashboard/post/AddPost";
import ShowAllPost from "./components/dashboard/post/ShowAllPost";
import SinglePost from "./components/dashboard/post/SinglePost";
import EditPost from "./components/dashboard/post/EditPost";
import IndexUI from "@/pagesUI/IndexUI";
import AddTag from "./components/dashboard/Tag/AddTag";
import EditTag from "./components/dashboard/Tag/EditTag";
import SingleTag from "./components/dashboard/Tag/SingleTag";
import Comment from "@/pagesUI/Comment";
import UserProfile from "@/components/dashboard/UserProfile/UserProfile"


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Index />} /> */}
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Index />} />
          <Route path="/show/all/post" element={<ShowAllPost />} />
          <Route path="/posts/new" element={<AddPost />} />
          <Route path="/post/:id" element={<SinglePost />} />
          {/* edit post */}
          <Route path="/edit/post/:id" element={<EditPost />} />

  {/* TAG ROUTE */}

  <Route path="/add/tag" element={<AddTag />} />
  <Route path="/edit/tag/:id" element={<EditTag />} />
  <Route path="/single/tag/:id" element={<SingleTag />} />
  <Route path="/show/all/tag" element={<AddTag />} />

  {/* TODO: Replace the dummy post object with real data as needed */}
  <Route path="/comment" element={<Comment post={{ id: 1, title: "Sample Post", content: "Sample content" }} />} />
  <Route path="/user/profile" element={<UserProfile  />} />









          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />


           <Route path="/index" element={<IndexUI />} />

          {/* UI ROUTE */}



        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
