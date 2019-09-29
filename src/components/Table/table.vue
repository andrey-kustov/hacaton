<template lang="html">
    <tbody>
        <tr class="first_block">
            <td>{{text.title}}</td>
            <td>{{text.name_1}}</td>
            <td>{{text.moscow_name_1}}</td>
            <td>{{text.russia_name_1}}</td>
        </tr>
        <tr class="body_table">
            <td>Мужчины</td>
            <td>{{text.name_2}}</td>
            <td>{{text.moscow_name_2}}</td>
            <td>{{text.russia_name_2}}</td>
        </tr>
        <tr class="body_table">
            <td>Женщины</td>
            <td>{{text.name_3}}</td>
            <td>{{text.moscow_name_3}}</td>
            <td>{{text.russia_name_3}}</td>
        </tr>
    </tbody>
</template>

<script>
export default {
    props: {
        text: {
            type: Object
        }
    }
}
</script>

<style lang="css" scoped>
    .first_block td {
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 24px;
    }
    .body_table td {
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
        color: #9D9D9D;
    }
</style>
