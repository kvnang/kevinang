"use client";

import * as React from "react";
import { createClient } from "@/lib/supabaseBrowser";
// import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import {
  FormWrapper,
  FormField,
  Input,
  FormFooter,
  FormSubmitButton,
} from "@/components/Forms";

export function Login() {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const supabase = createClient();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);

    const email = event.currentTarget.email.value;

    const { data, error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: "http://localhost:3000/account",
      },
    });

    if (error) {
      console.error(error);
      setLoading(false);
      return;
    }

    setSuccess(true);
    setLoading(true);
  };

  return (
    <div className="max-w-xl mx-auto">
      <div className="bg-bg-tint-0 p-12 rounded-md shadow-md">
        <h1 className="h4 mb-6">Sign in to your account</h1>
        {success ? (
          <div className="max-w-prose">
            <p>
              We have sent you an email with a magic link. Please click the link
              to sign in.
            </p>
          </div>
        ) : (
          <form action="" onSubmit={handleSubmit}>
            <FormWrapper>
              <FormField>
                <Input
                  name="email"
                  label="Email"
                  placeholder="johndoe@example.com"
                  required
                />
              </FormField>
              <FormFooter>
                <FormField>
                  <FormSubmitButton
                    loading={loading}
                    title="Continue with Email"
                  />
                </FormField>
              </FormFooter>
            </FormWrapper>
          </form>
        )}
      </div>
    </div>
  );
}
