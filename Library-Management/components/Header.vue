<template>
    <div class="app-header">
        <div class="sidebar">,
            <div class="app-centered"></div>
            <div class="menu-item">
                <div class="logo">
                    <i class='bx bx-book-content'></i>
                </div>

                <div class="text">
                    <p>Book Transactions                    </p>
                </div>
            </div>

            <div class="menu-item">
                <div class="logo">
                    <i class='bx bxs-objects-horizontal-left'></i>
                </div>

                <div class="text">
                    <p>Member registration</p>
                </div>
            </div>

            <div class="menu-item">
                <div class="logo">
                    <i class='bx bx-user'></i>
                </div>

                <div class="text">
                    <p>Category Transactions</p>
                </div>
            </div>

            <div class="menu-item">
                <div class="logo">
                    <i class='bx bx-transfer'></i>
                </div>

                <div class="text">
                    <p>Book Transfer</p>
                </div>
            </div>

            <div class="menu-item">
                <div class="logo">

                    <i class='bx bxs-objects-vertical-bottom'></i>
                </div>

                <div class="text">
                    <p>Genel Bilgiler</p>
                </div>
            </div>
        </div>


        <div class="app-dash">
            <div class="item">
                <div class="app-title">
                    <h6>Dashboard</h6>
                </div>
                <div class="app-settings">
                    <i class='bx bx-user'></i>
                    <i class='bx bxs-moon'></i>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped lang="scss">
.app-header {
    display: flex;
    flex-direction: row;

    width: 100%;
    height: 10vh;

    .sidebar {
        width: 3%;
        height: 100%;
        display: flex;
        position: fixed;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-image: linear-gradient(to top, #a3bded 0%, #6991c7 100%);
        transition: 0.4s ease;
        z-index: 999;
        ;


        &:hover {
            width: 15%;

            .text {
                opacity: 1 !important;
                width: 100%;
                transition: 1s ease;
            }
        }

        .menu-item {
            display: flex;

            justify-content: space-around;
            width: 100%;
            height: 10%;
            text-wrap: nowrap;
            position: relative;
            cursor: pointer;

            .logo {
                position: fixed;
                left: 0;

                i {
                    font-size: 34px;
                    color: black;

                }
            }

            .text {
                width: 10%;
                height: 100%;
                display: flex;
                justify-content: center;
                position: fixed;
                z-index: 999;
                right: 5;
                opacity: 0;
                font-family: Arial, Helvetica, sans-serif;

                p {
                    transition: 1s ease;
                    margin: 0px;
                    font-weight: 500;
                    color: black;
                    font-family: 'Lato', sans-serif;
                }

            }

        }
    }

    .app-dash {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 10%;
        position: absolute;
        box-shadow: 0px 0px 5px 0px gray;
        padding-left: 50px;

        .item {
            width: 95%;

            display: flex;
            justify-content: space-between;

            .app-title {
                width: 30%;

            }

            .app-settings {
                display: flex;
                align-items: center;
                justify-content: space-around;
                width: 10%;

                i {
                    font-size: 30px;
                    color: rgb(0, 1, 70);
                }
            }
        }
    }
}
</style>