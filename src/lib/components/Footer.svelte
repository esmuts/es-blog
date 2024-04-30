<script>
	import instaSVG from '$lib/assets/svg/instagram.svg';
	import linkedinSVG from '$lib/assets/svg/linkedin.svg';
	import blueskySVG from '$lib/assets/svg/bluesky.svg';
	import githubSVG from '$lib/assets/svg/github.svg';
</script>

<footer>
	<center><p>Contact: eckards@sun.ac.za</p></center>
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
			<li>
				<a href="https://github.com/esmuts"><img src={githubSVG} alt="visit Github" /></a>
			</li>
		</ul>
	</nav>
</footer>

<style>

	footer {
		margin-top: 10rem;
	}

	nav {
		display: flex;
		justify-content: center;
	}

	ul {
		list-style-type: none;
		display: flex;
		gap: 4vmin;
	}

	img {
		height: 6vmin;
		width: 6vmin;
		/* Color to filter converter: https://codepen.io/sosuke/pen/Pjoqqp */
		filter: brightness(0) saturate(100%) invert(94%) sepia(90%) saturate(7346%) hue-rotate(180deg)
			brightness(108%) contrast(103%);
	}

	

	a {
		text-decoration: none;
		color: inherit;
	}

@media screen and (min-width: 768px) {
	ul {
		gap: 2vmin;
	}
	
	img {
		height: 3vmin;
		width: 3vmin;
	}
}

</style>
