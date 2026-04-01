<script setup>
import { AppButton } from "@/components/ui/buttons";
import { AppInput } from "@/components/ui/input";
import { reactive } from "vue";

const form = reactive({
  email: "",
  password: "",
  confirmPassword: "",
});

const errors = reactive({
  confirmPassword: "",
});

const handleSubmit = () => {
  errors.confirmPassword = "";
  if (form.password !== form.confirmPassword) {
    errors.confirmPassword = "Passwords do not match!";
    return;
  }
  console.log("Sign up form:", form);
};
</script>

<template>
  <main class="px-4 py-10 sm:px-6">
    <div
      class="mx-auto  w-full max-w-md rounded-2xl border border-zinc-200 bg-white/90 p-6 shadow-[0_20px_60px_-20px_rgba(24,24,27,0.45)] sm:p-8"
    >
      <div class="mb-6 text-center">
        <p
          class="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500"
        >
          Create Account
        </p>
        <h1 class="mt-2 text-3xl font-bold tracking-tight text-zinc-900">
          Start Your Journey
        </h1>
        <p class="mt-2 text-sm text-zinc-600">
          Sign up to access your dashboard and manage everything in one place.
        </p>
      </div>

      <form @submit.prevent="handleSubmit" class="space-y-4">
        <AppInput
          label="Email"
          placeholder="Enter your email"
          v-model="form.email"
          id="email"
          type="email"
        />

        <AppInput
          label="Password"
          placeholder="Enter your password"
          type="password"
          v-model="form.password"
          id="password"
        />

        <AppInput
          label="Confirm Password"
          placeholder="Confirm your password"
          type="password"
          v-model="form.confirmPassword"
          id="confirmPassword"
          :error="errors.confirmPassword"
        />

        <AppButton type="submit" variant="primary" block class="mt-2">
          Sign Up
        </AppButton>

        <p class="text-center text-sm text-zinc-600">
          Already have an account?
          <RouterLink
            to="/login"
            class="font-semibold text-zinc-900 hover:underline"
          >
            Sign in
          </RouterLink>
        </p>
      </form>
    </div>
  </main>
</template>
