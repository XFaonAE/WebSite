<template>
	<div class="root">
        <div class="header">
            <div class="left"></div>

            <div class="right">
                <button>
                    <icon icon="add" size="13" />
                </button>

                <button>
                    <icon icon="add" size="13" />
                </button>

                <button>
                    <icon icon="add" size="13" />
                </button>
            </div>
        </div>

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
	border-top: 5px solid @accent;

    .header {
        width: 100%;
        height: 40px;
        background: @layer0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;

        .left, .right {
            display: flex;
            flex-direction: row;
        }

        .left {
            margin-left: 5px;
        }

        .right {
            margin-right: 5px;
        }

        button {
            width: 30px;
            height: 30px;
            border-radius: 3px;
            border: none;
            border-top: 1px solid transparent;
            background: transparent;
            color: @textDim;
            transition: 100ms;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 5px;

            &:hover {
                border-color: @dynamic1;
                background: @dynamic1;
                color: @text;
            }
        }
    }

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
        background: @layer0;
		font-family: @mainFont;
		font-size: 11px;
		display: flex;
		align-items: center;
		padding: 10px;
	}
}
</style>