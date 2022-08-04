<script lang="ts">
	import logo from './logo-initials.svg';
</script>

<footer>
	<img src={logo} alt="Kevin Ang" />
	<p class="h6">&copy; Kevin Ang {new Date().getFullYear()}</p>
</footer>

<style lang="scss">
	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}
	img {
		width: 5rem;
		height: auto;
		margin-bottom: 1.5rem;
	}
</style>
