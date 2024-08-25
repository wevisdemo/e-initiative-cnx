<script lang="ts">
	import SignOnlineForm from './SignOnlineForm.svelte';
	import CardContainer from './CardContainer.svelte';
</script>

<div class="flex flex-1 flex-col gap-6 {$$restProps.class}">
	<CardContainer>
		<SignOnlineForm />
	</CardContainer>
</div>
