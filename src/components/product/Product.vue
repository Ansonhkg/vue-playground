<template>
    <div class="col-md-5">
        <div class="thumbnail">
            <img src="https://www.dogids.com/blog/wp-content/uploads/2013/09/dog-poop-no-sign-300x274.jpg" width=200 height=200 alt="">

            <div class="caption">
                <h3>{{ product.id }} | {{ product.name }}</h3>
                <p>{{ product.price }}</p>
                <h5>Owner ID: {{ product.user_id }}</h5>
                <hr>

                <p>
                    <a href="#" class="btn btn-default">Wish List</a>
                    <a href="" class="btn btn-success">Buy</a>
                </p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: ['product', 'authenticatedUser']
}
</script>