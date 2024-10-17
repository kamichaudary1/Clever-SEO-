// app/login/page.tsx
import Signup from "@/components/signup/Signup";
import AuthLayout from '@/layouts/AuthLayout';

export default function page() {
  return (
    <AuthLayout>
        <Signup />
    </AuthLayout>
  )
}
