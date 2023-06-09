<script lang="ts">
    import check from '$lib/img/check.svg'
</script>

<div class="point">
    <div><img src="{check}" alt="Галка"></div>
    <p>
        <slot></slot>
    </p>
</div>

<style>
    .point {
        display: flex;
        gap: 12px
    }

    .point div {
        margin-top: 16px;
    }

    .point p {
        margin-top: 28px;
        font-family: var(--geologica);
        font-weight: 250;
        font-size: 24px;
    }
</style>
