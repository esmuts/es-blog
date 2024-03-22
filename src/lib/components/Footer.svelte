<script>
	import instaSVG from '$lib/assets/svg/instagram.svg';
	import linkedinSVG from '$lib/assets/svg/linkedin.svg';
	import blueskySVG from '$lib/assets/svg/bluesky.svg';
</script>

<footer>
	<nav>
		<ul>
			<li>
				<a href="https://www.instagram.com/eckardsmuts/"
					><img src={instaSVG} alt="visit Instagram" /></a
				>
			</li>
			<li>
				<a href="https://www.linkedin.com/in/eckard-smuts-7a315117/?originalSubdomain=za"
					><img src={linkedinSVG} alt="visit Linkedin" /></a
				>
			</li>
			<li>
				<a href="https://bsky.app/profile/esmuts.bsky.social"
					><img src={blueskySVG} alt="visit Bluesky" /></a
				>
			</li>
		</ul>
	</nav>
</footer>

<style>
	ul {
		list-style-type: none;
		display: flex;
		gap: 4vmin;
	}

	img {
		height: 8vmin;
		width: 8vmin;
		/* Color to filter converter: https://codepen.io/sosuke/pen/Pjoqqp */
		filter: brightness(0) saturate(100%) invert(94%) sepia(90%) saturate(7346%) hue-rotate(180deg)
			brightness(108%) contrast(103%);
	}

	footer {
		grid-row: 3;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	a {
		text-decoration: none;
		color: inherit;
	}
</style>
