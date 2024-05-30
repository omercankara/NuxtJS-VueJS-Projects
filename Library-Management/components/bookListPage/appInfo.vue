<template>
    <div class="app-row">
        <div class="info-content">
            <div class="info-item">
                <div class="app-title">
                    Toplam Kitap
                </div>
                <div class="app-number">
                    <p>30</p>
                </div>
            </div>

            <div class="info-item">
                <div class="app-title">
                    Ödünç Verilen Kitap
                </div>
                <div class="app-number">
                    <p>30</p>
                </div>
            </div>
        </div>
    </div>
</template>



<style scoped lang="scss">
p{
    padding: 0px;
    line-height: 0px;
}
.app-row {
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    padding: 0px 0px 0px 10px;
    // background-color: rgb(125, 52, 219);
    border: 2px solid rgb(125, 52, 219);;
    border-radius: 1vh;

    .info-content {
        width: 40%;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .info-item {
        width: 40%;
        height: 80%;
        border: 2px solid rgb(90, 21, 180);;
        border-radius: 1vh;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
       

        .app-title {
          
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 50%;
            font-weight: normal;
            font-family: Arial, Helvetica, sans-serif;
            color: black;
        }

        .app-number {
           
            width: 100%;
            height: 50%;
            color: rgb(17, 0, 112);
            font-weight: bold;
            font-family: Arial, Helvetica, sans-serif;
            display: flex;
            justify-content: center;
            align-items: flex-end;
        }
    }
}
</style>