<section>
	<nav>
		<input id="toggle1" type="checkbox" />
		<label class="hamburger1" for="toggle1">
			<div class="top"></div>
			<div class="meat"></div>
			<div class="bottom"></div>
		</label>

		<nav class="menu1">
			<a class="link1" href="#experience">Experience</a>
			<a class="link1" href="#projects">Projects</a>
			<a class="link1" href="#contact">Contact</a>
		</nav>
	</nav>
</section>

<style>
	a {
		color: #fff;
		text-decoration: none;
	}

	/* Hamburger */
	.hamburger1 {
		height: 45px;
		margin: 10px;
		display: grid;
		grid-template-rows: repeat(3, 1fr);
		justify-items: center;
		z-index: 120;
	}

	.hamburger1 div {
		background-color: whitesmoke;
		position: relative;
		width: 40px;
		height: 3px;
		margin-top: 7px;
		transition: all 0.2s ease-in-out;
	}

	#toggle1 {
		display: none;
	}

	#toggle1:checked + .hamburger1 .top {
		transform: rotate(-45deg);
		margin-top: 22.5px;
	}

	#toggle1:checked + .hamburger1 .meat {
		transform: rotate(45deg);
		margin-top: -5px;
	}

	#toggle1:checked + .hamburger1 .bottom {
		transform: scale(0);
	}

	#toggle1:checked ~ .menu1 {
		height: 200px;
	}

	/* Menu */
	.menu1 {
		width: 100%;
		margin: 0;
		display: -ms-grid;
		display: grid;
		grid-template-rows: 1fr repeat(3, 0.5fr);
		grid-row-gap: 25px;
		padding: 0;
		list-style: none;
		clear: both;
		width: auto;
		text-align: center;
		height: 0px;
		overflow: hidden;
		transition: height 0.4s ease;
		z-index: 120;
		-webkit-transition: all 0.3s ease;
		transition: all 0.3s ease;
	}

	.menu1 a:first-child {
		margin-top: 40px;
	}

	.menu1 a:last-child {
		margin-bottom: 40px;
	}

	.link1 {
		width: 100%;
		margin: 0;
		padding: 5px 0;
		font-size: 1.25rem /* 20px */;
		line-height: 1.75rem /* 28px */;
	}
</style>
