<script lang="ts">
  import { subscribe } from "$lib/stores/store";
  export let placeholder: string = "your email address";
  export let subscribeMessage: string = "Thank you for subscribing!";
  export let buttonText: string = " Subscribe to our mailing";

  let subscriptionInput: HTMLInputElement;
  let cursor: HTMLElement;
  let user_email: string;

  async function userSubscribe() {
    const response = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_email: user_email,
        subscribe: true,
      }),
    });
    $subscribe = true;
  }
</script>

<form class="flex flex-col items-center py-4">
  {#if $subscribe}
    <p class="">{subscribeMessage}</p>
  {:else}
    <div class="relative">
      <input
        bind:this={subscriptionInput}
        type="text"
        name="subscribe-email"
        class="ml-10 outline-none italic bg-black"
        bind:value={user_email}
        on:focus={() => {
          cursor.style.display = "none";
          subscriptionInput.placeholder = "";
        }}
        on:focusout={() => {
          subscriptionInput.placeholder = placeholder;
        }}
        {placeholder}
      />
      <p
        id="cursor"
        bind:this={cursor}
        class="absolute top-0 right-7 animate-[cursor_1s_step-start_0s_infinite]"
      >
        |
      </p>
    </div>
    <div class="subscribe-button-wrapper mt-3">
      <button
        id="subscribeButton"
        class="px-2 py-1 border-2 bg-black hover:bg-[rgba(0,0,0,0.5)] border-white"
        on:click|preventDefault={userSubscribe}
        type="submit">{buttonText}</button
      >
    </div>
  {/if}
</form>

<style>
  #cursor {
    transform: rotate(10deg);
  }

  .subscribe-button-wrapper {
    background: rgb(211, 45, 117);
    background: linear-gradient(
      90deg,
      rgba(211, 45, 117, 1) 0%,
      rgba(92, 41, 182, 1) 33%,
      rgba(234, 207, 97, 1) 66%,
      rgba(78, 149, 145, 1) 100%
    );
    background-size: 400%;
    animation: gradient 5s ease infinite;
  }
</style>
