const broadcast = (componentName, eventName, params) => {
    this.$children.forEach(child => {
        let name = child.$options.componentName

        if (name === componentName) {
            child.$emit.apply(child, [eventName, ...params])
        } else {
            broadcast.apply(child, [componentName, eventName, ...params])
        }
    })
}

export default {
    methods: {
        dispatch (componentName, eventName, params) {
            let parent = this.$parent || this.$root
            let name = parent.$options.componentName

            while (parent && (!name || name !== componentName)) {
                parent = parent.$parent

                if (parent) {
                    name = parent.$options.componentName
                }
            }

            if (parent) {
                parent.$emit.apply(parent, [eventName, ...params])
            }
        }
    }
}
