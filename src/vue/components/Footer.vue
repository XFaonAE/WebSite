<template>
	<div class="root">
		<div class="sections">
			<div class="section">
				<h1>Header</h1>

				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, vel.</p>
			</div>

			<div class="section">
				<h1>Header</h1>

				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, vel.</p>
			</div>

			<div class="section">
				<h1>Header</h1>

				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, vel.</p>
			</div>
		</div>

		<div class="copyright">
			<span>
				Copyright Axeri LLC [ Missing ]. All Rights Reserved.
			</span>
		</div>
	</div>
</template>

<style lang="less" scoped>
@import "./Config";

.root {
	color: @text;
	background: @dynamic1;
	border-top: 5px solid @accent;

	.sections {
		display: flex;
		flex-wrap: wrap;

		.section {
			flex: 1 250px;
			padding: 10px;

			h1 {
				font-weight: lighter;
				font-family: @mainFont;
				font-size: 18px;
				color: @textDim;
			}

			p {
				font-size: 13px;
				font-family: @mainFont;
			}
		}
	}

	.copyright {
		width: 100%;
		min-height: 40px;
		background: @dynamic1;
		font-family: @mainFont;
		font-size: 11px;
		display: flex;
		align-items: center;
		padding: 10px;
	}
}
</style>