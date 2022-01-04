<template>
    <div>
        <div class="flex items-center z-50">
            <svg v-if="!error" xmlns="http://www.w3.org/2000/svg" width="20" class="mr-2 min-w-8" height="20" viewBox="0 0 20 20">
                <path
                    id="icon-check-circle"
                    d="M12,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22Zm0-2a8,8,0,1,0-8-8A8,8,0,0,0,12,20ZM9.7,11.3,11,12.59l3.3-3.3a1,1,0,0,1,1.4,1.42l-4,4a1,1,0,0,1-1.4,0l-2-2a1,1,0,0,1,1.4-1.42Z"
                    transform="translate(-2 -2)"
                    fill="#19216c"
                />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="mr-2 min-w-8" width="20" viewBox="0 0 24 24" height="20" fill="#19216c"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M13.89 8.7L12 10.59 10.11 8.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 8.7 13.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l1.89 1.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l1.89-1.89c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.38-1.41 0zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
            <div class="font-semibold text-textcolor">{{ title }}</div>
        </div>
        <div class="text-textcolor px-2">{{ desc }}</div>
    </div>
</template>

<script>
export default {
    name: "ToastBody",
    props: ['title', 'desc', 'error']
}
</script>
<style>
.Vue-Toastification__container {
    z-index: 9999;
    position: fixed;
    padding: 4px;
    width: 600px;
    box-sizing: border-box;
    display: flex;
    min-height: 100%;
    color: #fff;
    flex-direction: column;
    pointer-events: none;
}

@media only screen and (min-width: 600px) {
    .Vue-Toastification__container.top-left, .Vue-Toastification__container.top-right, .Vue-Toastification__container.top-center {
        top: 1em;
    }

    .Vue-Toastification__container.bottom-left, .Vue-Toastification__container.bottom-right, .Vue-Toastification__container.bottom-center {
        bottom: 1em;
        flex-direction: column-reverse;
    }

    .Vue-Toastification__container.top-left, .Vue-Toastification__container.bottom-left {
        left: 1em;
    }

    .Vue-Toastification__container.top-left .Vue-Toastification__toast, .Vue-Toastification__container.bottom-left .Vue-Toastification__toast {
        margin-right: auto;
    }

    .Vue-Toastification__container.top-left .Vue-Toastification__toast--rtl, .Vue-Toastification__container.bottom-left .Vue-Toastification__toast--rtl {
        margin-right: unset;
        margin-left: auto;
    }

    .Vue-Toastification__container.top-right, .Vue-Toastification__container.bottom-right {
        right: 1em;
    }

    .Vue-Toastification__container.top-right .Vue-Toastification__toast, .Vue-Toastification__container.bottom-right .Vue-Toastification__toast {
        margin-left: auto;
    }

    .Vue-Toastification__container.top-right .Vue-Toastification__toast--rtl, .Vue-Toastification__container.bottom-right .Vue-Toastification__toast--rtl {
        margin-left: unset;
        margin-right: auto;
    }

    .Vue-Toastification__container.top-center, .Vue-Toastification__container.bottom-center {
        left: 50%;
        margin-left: -300px;
    }

    .Vue-Toastification__container.top-center .Vue-Toastification__toast, .Vue-Toastification__container.bottom-center .Vue-Toastification__toast {
        margin-left: auto;
        margin-right: auto;
    }
}

@media only screen and (max-width: 600px) {
    .Vue-Toastification__container {
        width: 100vw;
        padding: 0;
        left: 0;
        margin: 0;
    }

    .Vue-Toastification__container .Vue-Toastification__toast {
        width: 100%;
    }

    .Vue-Toastification__container.top-left, .Vue-Toastification__container.top-right, .Vue-Toastification__container.top-center {
        top: 0;
    }

    .Vue-Toastification__container.bottom-left, .Vue-Toastification__container.bottom-right, .Vue-Toastification__container.bottom-center {
        bottom: 0;
        flex-direction: column-reverse;
    }
}

.Vue-Toastification__toast {
    display: inline-flex;
    position: relative;
    max-height: 800px;
    min-height: 64px;
    box-sizing: border-box;
    margin-bottom: 1rem;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1), 0 2px 15px 0 rgba(0, 0, 0, 0.05);
    justify-content: space-between;
    max-width: 24rem;
    width: 100%;
    min-width: 280px;
    pointer-events: auto;
    overflow: hidden;
    transform: translateZ(0);
    direction: ltr;
}

.Vue-Toastification__toast--rtl {
    direction: rtl;
}

.Vue-Toastification__toast--default {
    background-color: #19216c;
    color: #fff;
}

.Vue-Toastification__toast--info {
    /*border: 0 solid #4d94ff;*/
    /*border-left-width: 2px;*/
    background: var(--board);
    color: var(--primary);
}

.Vue-Toastification__toast--success {
    /*border: 0 solid #1EDC7E;*/
    /*border-left-width: 2px;*/
    background: var(--board);
    color: var(--primary);
}

.Vue-Toastification__toast--error {
    /*border: 0 solid #FB3F50;*/
    /*border-left-width: 2px;*/
    background: var(--board);
    color: var(--primary);
}

.Vue-Toastification__toast--warning {
    /*border: 0 solid #ffc123;*/
    /*border-left-width: 2px;*/
    background: var(--board);
    color: var(--primary);
}


@media only screen and (max-width: 600px) {
    .Vue-Toastification__toast {
        border-radius: 0;
        margin-bottom: 0.5rem;
    }
}

.Vue-Toastification__toast-body {
    flex: 1;
    line-height: 24px;
    font-size: 16px;
    word-break: break-word;
    white-space: pre-wrap;
}

.Vue-Toastification__toast-component-body {
    flex: 1;
}

.Vue-Toastification__toast.disable-transition {
    animation: none !important;
}

.Vue-Toastification__close-button {
    font-size: 24px;
    background: transparent;
    outline: none;
    border: none;
    position: absolute;
    top: -.25rem;
    right: .5rem;
    padding: 0 0 0 10px;
    cursor: pointer;
    color: var(--primary);
    opacity: 0.3;
    transition: visibility 0s, opacity 0.2s linear;
}

.Vue-Toastification__close-button:hover, .Vue-Toastification__close-button:focus {
    opacity: 1;
}

.Vue-Toastification__toast:not(:hover) .Vue-Toastification__close-button.show-on-hover {
    opacity: 0;
}

.Vue-Toastification__toast--rtl .Vue-Toastification__close-button {
    padding-left: unset;
    padding-right: 10px;
}

@keyframes scale-x-frames {
    0% {
        transform: scaleX(1);
    }
    100% {
        transform: scaleX(0);
    }
}

.Vue-Toastification__progress-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    z-index: 10000;
    background-color: var(--primary);
    transform-origin: left;
    animation: scale-x-frames linear 1 forwards;
}

.Vue-Toastification__toast--rtl .Vue-Toastification__progress-bar {
    right: 0;
    left: unset;
    transform-origin: right;
}

.Vue-Toastification__icon {
    margin: auto 18px auto 0px;
    background: transparent;
    outline: none;
    border: none;
    padding: 0;
    transition: 0.3s ease;
    align-items: center;
    width: 20px;
    height: 100%;
}

.Vue-Toastification__toast--rtl .Vue-Toastification__icon {
    margin: auto 0px auto 18px;
}

@keyframes bounceInRight {
    from, 60%, 75%, 90%, to {
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    from {
        opacity: 0;
        transform: translate3d(3000px, 0, 0);
    }
    60% {
        opacity: 1;
        transform: translate3d(-25px, 0, 0);
    }
    75% {
        transform: translate3d(10px, 0, 0);
    }
    90% {
        transform: translate3d(-5px, 0, 0);
    }
    to {
        transform: none;
    }
}

@keyframes bounceOutRight {
    40% {
        opacity: 1;
        transform: translate3d(-20px, 0, 0);
    }
    to {
        opacity: 0;
        transform: translate3d(1000px, 0, 0);
    }
}

@keyframes bounceInLeft {
    from, 60%, 75%, 90%, to {
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
        opacity: 0;
        transform: translate3d(-3000px, 0, 0);
    }
    60% {
        opacity: 1;
        transform: translate3d(25px, 0, 0);
    }
    75% {
        transform: translate3d(-10px, 0, 0);
    }
    90% {
        transform: translate3d(5px, 0, 0);
    }
    to {
        transform: none;
    }
}

@keyframes bounceOutLeft {
    20% {
        opacity: 1;
        transform: translate3d(20px, 0, 0);
    }
    to {
        opacity: 0;
        transform: translate3d(-2000px, 0, 0);
    }
}

@keyframes bounceInUp {
    from, 60%, 75%, 90%, to {
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    from {
        opacity: 0;
        transform: translate3d(0, 3000px, 0);
    }
    60% {
        opacity: 1;
        transform: translate3d(0, -20px, 0);
    }
    75% {
        transform: translate3d(0, 10px, 0);
    }
    90% {
        transform: translate3d(0, -5px, 0);
    }
    to {
        transform: translate3d(0, 0, 0);
    }
}

@keyframes bounceOutUp {
    20% {
        transform: translate3d(0, -10px, 0);
    }
    40%, 45% {
        opacity: 1;
        transform: translate3d(0, 20px, 0);
    }
    to {
        opacity: 0;
        transform: translate3d(0, -2000px, 0);
    }
}

@keyframes bounceInDown {
    from, 60%, 75%, 90%, to {
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
        opacity: 0;
        transform: translate3d(0, -3000px, 0);
    }
    60% {
        opacity: 1;
        transform: translate3d(0, 25px, 0);
    }
    75% {
        transform: translate3d(0, -10px, 0);
    }
    90% {
        transform: translate3d(0, 5px, 0);
    }
    to {
        transform: none;
    }
}

@keyframes bounceOutDown {
    20% {
        transform: translate3d(0, 10px, 0);
    }
    40%, 45% {
        opacity: 1;
        transform: translate3d(0, -20px, 0);
    }
    to {
        opacity: 0;
        transform: translate3d(0, 2000px, 0);
    }
}

@keyframes bounceOutDown {
    20% {
        transform: translate3d(0, 10px, 0);
    }
    40%, 45% {
        opacity: 1;
        transform: translate3d(0, -20px, 0);
    }
    to {
        opacity: 0;
        transform: translate3d(0, 2000px, 0);
    }
}

.Vue-Toastification__bounce-enter-active.top-left, .Vue-Toastification__bounce-enter-active.bottom-left {
    animation-name: bounceInLeft;
}

.Vue-Toastification__bounce-enter-active.top-right, .Vue-Toastification__bounce-enter-active.bottom-right {
    animation-name: bounceInRight;
}

.Vue-Toastification__bounce-enter-active.top-center {
    animation-name: bounceInDown;
}

.Vue-Toastification__bounce-enter-active.bottom-center {
    animation-name: bounceInUp;
}

.Vue-Toastification__bounce-leave-active:not(.disable-transition).top-left, .Vue-Toastification__bounce-leave-active:not(.disable-transition).bottom-left {
    animation-name: bounceOutLeft;
}

.Vue-Toastification__bounce-leave-active:not(.disable-transition).top-right, .Vue-Toastification__bounce-leave-active:not(.disable-transition).bottom-right {
    animation-name: bounceOutRight;
}

.Vue-Toastification__bounce-leave-active:not(.disable-transition).top-center {
    animation-name: bounceOutUp;
}

.Vue-Toastification__bounce-leave-active:not(.disable-transition).bottom-center {
    animation-name: bounceOutDown;
}

.Vue-Toastification__bounce-leave-active,
.Vue-Toastification__bounce-enter-active {
    animation-duration: 750ms;
    animation-fill-mode: both;
}

.Vue-Toastification__bounce-move {
    transition-timing-function: ease-in-out;
    transition-property: all;
    transition-duration: 400ms;
}

/* ----------------------------------------------
 * Modified version from Animista
 * Animista is Licensed under FreeBSD License.
 * See http://animista.net/license for more info.
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */
@keyframes fadeOutTop {
    0% {
        transform: translateY(0);
        opacity: 1;
    }
    100% {
        transform: translateY(-50px);
        opacity: 0;
    }
}

@keyframes fadeOutLeft {
    0% {
        transform: translateX(0);
        opacity: 1;
    }
    100% {
        transform: translateX(-50px);
        opacity: 0;
    }
}

@keyframes fadeOutBottom {
    0% {
        transform: translateY(0);
        opacity: 1;
    }
    100% {
        transform: translateY(50px);
        opacity: 0;
    }
}

@keyframes fadeOutRight {
    0% {
        transform: translateX(0);
        opacity: 1;
    }
    100% {
        transform: translateX(50px);
        opacity: 0;
    }
}

@keyframes fadeInLeft {
    0% {
        transform: translateX(-50px);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes fadeInRight {
    0% {
        transform: translateX(50px);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes fadeInTop {
    0% {
        transform: translateY(-50px);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}

@keyframes fadeInBottom {
    0% {
        transform: translateY(50px);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}

.Vue-Toastification__fade-enter-active.top-left, .Vue-Toastification__fade-enter-active.bottom-left {
    animation-name: fadeInLeft;
}

.Vue-Toastification__fade-enter-active.top-right, .Vue-Toastification__fade-enter-active.bottom-right {
    animation-name: fadeInRight;
}

.Vue-Toastification__fade-enter-active.top-center {
    animation-name: fadeInTop;
}

.Vue-Toastification__fade-enter-active.bottom-center {
    animation-name: fadeInBottom;
}

.Vue-Toastification__fade-leave-active:not(.disable-transition).top-left, .Vue-Toastification__fade-leave-active:not(.disable-transition).bottom-left {
    animation-name: fadeOutLeft;
}

.Vue-Toastification__fade-leave-active:not(.disable-transition).top-right, .Vue-Toastification__fade-leave-active:not(.disable-transition).bottom-right {
    animation-name: fadeOutRight;
}

.Vue-Toastification__fade-leave-active:not(.disable-transition).top-center {
    animation-name: fadeOutTop;
}

.Vue-Toastification__fade-leave-active:not(.disable-transition).bottom-center {
    animation-name: fadeOutBottom;
}

.Vue-Toastification__fade-leave-active,
.Vue-Toastification__fade-enter-active {
    animation-duration: 750ms;
    animation-fill-mode: both;
}

.Vue-Toastification__fade-move {
    transition-timing-function: ease-in-out;
    transition-property: all;
    transition-duration: 400ms;
}

/* ----------------------------------------------
 * Modified version from Animista
 * Animista is Licensed under FreeBSD License.
 * See http://animista.net/license for more info.
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */
@keyframes slideInBlurredLeft {
    0% {
        transform: translateX(-1000px) scaleX(2.5) scaleY(0.2);
        transform-origin: 100% 50%;
        filter: blur(40px);
        opacity: 0;
    }
    100% {
        transform: translateX(0) scaleY(1) scaleX(1);
        transform-origin: 50% 50%;
        filter: blur(0);
        opacity: 1;
    }
}

@keyframes slideInBlurredTop {
    0% {
        transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
        transform-origin: 50% 0%;
        filter: blur(240px);
        opacity: 0;
    }
    100% {
        transform: translateY(0) scaleY(1) scaleX(1);
        transform-origin: 50% 50%;
        filter: blur(0);
        opacity: 1;
    }
}

@keyframes slideInBlurredRight {
    0% {
        transform: translateX(1000px) scaleX(2.5) scaleY(0.2);
        transform-origin: 0% 50%;
        filter: blur(40px);
        opacity: 0;
    }
    100% {
        transform: translateX(0) scaleY(1) scaleX(1);
        transform-origin: 50% 50%;
        filter: blur(0);
        opacity: 1;
    }
}

@keyframes slideInBlurredBottom {
    0% {
        transform: translateY(1000px) scaleY(2.5) scaleX(0.2);
        transform-origin: 50% 100%;
        filter: blur(240px);
        opacity: 0;
    }
    100% {
        transform: translateY(0) scaleY(1) scaleX(1);
        transform-origin: 50% 50%;
        filter: blur(0);
        opacity: 1;
    }
}

@keyframes slideOutBlurredTop {
    0% {
        transform: translateY(0) scaleY(1) scaleX(1);
        transform-origin: 50% 0%;
        filter: blur(0);
        opacity: 1;
    }
    100% {
        transform: translateY(-1000px) scaleY(2) scaleX(0.2);
        transform-origin: 50% 0%;
        filter: blur(240px);
        opacity: 0;
    }
}

@keyframes slideOutBlurredBottom {
    0% {
        transform: translateY(0) scaleY(1) scaleX(1);
        transform-origin: 50% 50%;
        filter: blur(0);
        opacity: 1;
    }
    100% {
        transform: translateY(1000px) scaleY(2) scaleX(0.2);
        transform-origin: 50% 100%;
        filter: blur(240px);
        opacity: 0;
    }
}

@keyframes slideOutBlurredLeft {
    0% {
        transform: translateX(0) scaleY(1) scaleX(1);
        transform-origin: 50% 50%;
        filter: blur(0);
        opacity: 1;
    }
    100% {
        transform: translateX(-1000px) scaleX(2) scaleY(0.2);
        transform-origin: 100% 50%;
        filter: blur(40px);
        opacity: 0;
    }
}

@keyframes slideOutBlurredRight {
    0% {
        transform: translateX(0) scaleY(1) scaleX(1);
        transform-origin: 50% 50%;
        filter: blur(0);
        opacity: 1;
    }
    100% {
        transform: translateX(1000px) scaleX(2) scaleY(0.2);
        transform-origin: 0% 50%;
        filter: blur(40px);
        opacity: 0;
    }
}

.Vue-Toastification__slideBlurred-enter-active.top-left, .Vue-Toastification__slideBlurred-enter-active.bottom-left {
    animation-name: slideInBlurredLeft;
}

.Vue-Toastification__slideBlurred-enter-active.top-right, .Vue-Toastification__slideBlurred-enter-active.bottom-right {
    animation-name: slideInBlurredRight;
}

.Vue-Toastification__slideBlurred-enter-active.top-center {
    animation-name: slideInBlurredTop;
}

.Vue-Toastification__slideBlurred-enter-active.bottom-center {
    animation-name: slideInBlurredBottom;
}

.Vue-Toastification__slideBlurred-leave-active:not(.disable-transition).top-left, .Vue-Toastification__slideBlurred-leave-active:not(.disable-transition).bottom-left {
    animation-name: slideOutBlurredLeft;
}

.Vue-Toastification__slideBlurred-leave-active:not(.disable-transition).top-right, .Vue-Toastification__slideBlurred-leave-active:not(.disable-transition).bottom-right {
    animation-name: slideOutBlurredRight;
}

.Vue-Toastification__slideBlurred-leave-active:not(.disable-transition).top-center {
    animation-name: slideOutBlurredTop;
}

.Vue-Toastification__slideBlurred-leave-active:not(.disable-transition).bottom-center {
    animation-name: slideOutBlurredBottom;
}

.Vue-Toastification__slideBlurred-leave-active,
.Vue-Toastification__slideBlurred-enter-active {
    animation-duration: 750ms;
    animation-fill-mode: both;
}

.Vue-Toastification__slideBlurred-move {
    transition-timing-function: ease-in-out;
    transition-property: all;
    transition-duration: 400ms;
}

</style>
