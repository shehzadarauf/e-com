<script setup>
import { AppButton } from "@/components/ui/buttons";
import { AppInput } from "@/components/ui/input";
import { reactive } from "vue";

const form = reactive({
  email: "",
  password: "",
});

const handleSubmit = () => {
  console.log("Login form:", form);
};
</script>

<template>
  <main class="px-4 py-10 sm:px-6">
    <div class="mx-auto w-full max-w-md border rounded-2xl border-zinc-200 bg-white/90  shadow-[0_20px_60px_-20px_rgba(24,24,27,0.45)] sm:p-8">
        <div>
            <p class="text-center text-2xl font-bold text-zinc-900">Well Come Back</p>
        </div>
      <form class="space-y-4" @submit.prevent="handleSubmit">
        <AppInput
          label="Email"
          placeholder="Enter your email"
          v-model="form.email"
          id="email"
          type="email"
          required
        />
        <AppInput
          label="Password"
          placeholder="Enter your password"
          type="password"
          required
          v-model="form.password"
          id="password"
        />
        <AppButton type="submit" variant="primary" block class="mt-4">
          Login
        </AppButton>

        <p class="text-center text-sm text-zinc-600">
          Don't have an account?
          <RouterLink
            to="/signup"
            class="font-medium text-black hover:underline"
          >
            Sign up
          </RouterLink>
        </p>
      </form>
    </div>
  </main>
</template>
