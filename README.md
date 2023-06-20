## Introduction
The concept is to centralize **responsabilities** at top level components and use **events** to transfer the information from deep child component to the top level component. The objective is to remove some responsabilties from components

In large scale application it will make shared component more flexible depending of the context. For example, if a component or a page use navigation but this one will be different depending of the context, you will have to know the app context in the component or to duplicate the component for this specific context and you will mantain two similar components

I provide a mobile example project to show you how it works.
```bash
$ npm i
$ npm run dev
```

## Folder structure

```
src/
 ├── components
 │   ├── some-domain-business-logic-folder
 │   ├── another-domain-business-logic-folder
 │   └── shared
 │         └── e.g : Header, Footer, Button ...
 ├── layouts
 ├── pages
 └── views
```

### Components
Components utilities divided by **business subjects** folders and a **shared** folder for generic components 

### Layouts
Contain each pages models, you can make it customizable or recreate for each page context

### Views
Views are pages content, they have to be generic to be reused in other context.
In this case generic means that each component external actions can be triggered by events.

### Pages
Pages are powered by [unplugin-vue-router](https://github.com/posva/unplugin-vue-router) and will contain views wrapped into layouts with navigation logical

## Use cases
### Navigation

In the example project you can see that cart is accessible from two contexts:
* From a shop with an active order
* From the footer link

Theses contexts provide differents functionalities :
* From a shop :
    * Confirm the cart
* From the footer link :
    * Confirm the cart
    * See other products -> return to shop page

The context need to the cart to navigate to the right page after action like back, add products ... 
This case is sample but each new context will complicate your component that has the only responsability to display and manage the cart.  

The navigation wanted, from a Shop is to comeback to the Home page :
* ✅ `Home` ➡ `Cart` ➡ `Shop` ➡ `Home`
* ✅ `Home` ➡ `Shop` ➡ `Cart` ➡ `Shop`

Not to the `Cart` page. If use router.back() in Shop :
* ❌ `Home` ➡ `Cart` ➡ `Shop` ➡ `Cart`

And if shop is used in another context we maybe want to not return on the Home page so we setup routing in every context in /pages 

### Layouts

You will probably ask me "Why didn't you call the same page route ?"
You're right but in this mobile context, I want to have a different layout for these two situations, a Page or a Modal (modal has a back button for example)

That's an other advantage of this concept: **Customize your layout depending of the context !**

See :

```html
<!-- /cart -->
<template>
    <Page>
        <CartView>
            <template #bottomActions>
                <Button @click="router.push('/shop/id')">Add products</Button>
            </template>
        </CartView>
    </Page>
</template>

<!-- /shop/:id/cart -->
<template>
    <Modal>
        <CartView></CartView>
    </Modal>
</template>
```

### Stores

Another responsability is to manage your store, your app components will be more flexible and maintainable if your store getters, mutations and actions are centralize in top level components.
That's why fire events will help you to reach this state.
Depending of your context you can catch events in parent component and do your stuff.

In this example, this is not the deep child responsabilty to check if there is an existing order, so we fire this event to the page which have the responsability.
(simplified code from the project)

```js
<!-- deep child -->
<template>
    <Button @click="emit('addProduct', id)"></Button>
</template>

<!-- child -->
<template>
    <DeepChild @add-product="(id) => emit('addProduct', id)"></DeepChild>
</template>

<!-- page -->
<template>
    <Child @add-product="addProduct"></Child>
</template>

<script setup>
const addProduct = (id) => {
    if (exstingOrderInAnotherShop) {
        showModal()
        return;
    }

    cart.addProduct(id);
}
</script>
```

## Conclusion

* Centralizing **responsibilities** in top-level components
* Achieve greater **flexibility** with shared components based on **different contexts**
* Avoid component **duplication**
* Greater components **maintainability**

Don't hesitate to make suggestions to improve this architecture.