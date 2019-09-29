<template lang="html">
    <section>
        <b-container class="bv-example-row">
            <div class="subscribe-wrap">
                <div class="social-item-block">
                    <div class="title-block">
                        <span>ЗНАЕШЬ СВОЮ СТРАНУ!</span>
                    </div>
                    <div class="body-social">
                        <span>Не жди лучших времён, действуй</span>
                        <div class="social-icon-wrap">
                            <ul>
                                <li>
                                    <a href="#">
                                        <img src="../../assets/vk.png" alt="">
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="../../assets/od.png" alt="">
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="../../assets/im.png" alt="">
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="../../assets/fb.png" alt="">
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="../../assets/tw.png" alt="">
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="subscribe-item-block">
                    <div class="title-subscribe-item">
                        <span>ПОДПИШИСЬ</span>
                    </div>
                    <span class="podpis">чтобы не пропустить Перепись населения 2020</span>
                    <div class="input_email">
                        <input type="text" name="" value="" placeholder="email">
                    </div>
                    <div class="btn-subscribe">
                        <button type="button" name="button">Подписаться</button>
                    </div>
                </div>
            </div>
        </b-container>
    </section>
</template>

<script>
import SocialBtn from "@/components/Button/social-btn"

export default {
    name: "subscribe-block",
    components: {
        "social-btn" : SocialBtn
    }
}

</script>

<style lang="css" scoped>
    section {
        background-color: #FE5464;
        padding: 62px 0;
    }
    .subscribe-wrap {
        display: flex;
    }
    .social-item-block {
        border-right: 1px solid #fff;
        width: 50%;
    }
    .subscribe-item-block {
        width: 50%;
        padding-left: 100px;
    }
    .social-item-block .title-block {
        margin-bottom: 66px;
    }
    .social-item-block .title-block span {
        font-size: 72px;
        line-height: 88px;
        color: #fff;
        font-weight: bold;
    }
    .body-social > span {
        margin-bottom: 16px;
        display: block;
        color: #fff;
    }
    .social-icon-wrap ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
        padding: 24px 52px;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 468px;
    }
    .social-icon-wrap ul li {

    }
    .social-icon-wrap a {
        display: block;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .social-icon-wrap img {
        max-width: 100%;
        max-height: 100%;
    }
    .title-subscribe-item {
        margin-bottom: 15px;
    }
    .title-subscribe-item span {
        font-size: 48px;
        line-height: 64px;
        font-weight: bold;
        color: #fff;
    }
    .subscribe-item-block .podpis {
        color: #fff;
        line-height: 28px;
        display: block;
        margin-bottom: 25px;
    }
    .input_email {
        margin-bottom: 24px;
    }
    .input_email input {
        border: 0px;
        background-color: transparent;
        border-bottom: 1px solid #fff;
        color: #fff;
        height: 30px;
    }
    .btn-subscribe button {
        width: 180px;
        height: 56px;
        background: #fff;
        color: #000;
        text-align: center;
        border: 0;
    }
    input[type="text"]::-webkit-input-placeholder { color: #fff; }
    input[type="text"]:-ms-input-placeholder { color: #fff; }
    input[type="text"]::-ms-input-placeholder { color: #fff; }
    input[type="text"]::placeholder { color: #fff; }
</style>
