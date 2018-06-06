<template>
<div>
    <Button @click="asdasdaf"></Button>
    <Tree :data="data5" :render="renderContent" show-checkbox multiple></Tree>
</div>
</template>
<script>
    export default {
        data () {
            return {
                data5: [
                    {
                        title: 'parent1',
                        expand: true,
                        children: [
                            {
                                title: 'child',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf11',
                                        expand: true
                                    },
                                    {
                                        title: 'leaf2',
                                        expand: true
                                    }
                                ]
                            },
                            {
                                title: 'child2',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf1',
                                        expand: true
                                    },
                                    {
                                        title: 'leaf21',
                                        expand: true
                                    }
                                ]
                            }
                        ]
                    }
                ],
                buttonProps: {
                    type: 'ghost',
                    size: 'small',
                }
            }
        },
        methods: {
            asdasdaf() {
                console.log(this.$refs.parent1);
                debugger;
            },
            renderContent (h, { root, node, data }) {
                return h('span', {
                    style: {
                        display: 'inline-block',
                        width: '100%'
                    },
                    ref: data.title,
                    on:{
                        click :() =>{
                            console.log("===============================rr"+data.title);
                        }
                    }
                }, [
                    h('span', [
                        h('Icon', {
                            props: {
                                type: 'ios-paper-outline'
                            },
                            style: {
                                marginRight: '8px'
                            }
                        }),
                        h('span', data.title)
                    ]),
                    h('span', {
                        style: {
                            display: 'inline-block',
                            float: 'right',
                            marginRight: '32px'
                        }
                    }, [
                        h('Button', {
                            props: Object.assign({}, this.buttonProps, {
                                icon: 'ios-plus-empty'
                            }),
                            style: {
                                marginRight: '8px'
                            },
                            on: {
                                click: () => { this.append(data) }
                            }
                        }),
                        h('Button', {
                            props: Object.assign({}, this.buttonProps, {
                                icon: 'ios-minus-empty'
                            }),
                            on: {
                                click: () => { this.remove(root, node, data) }
                            }
                        })
                    ])
                ]);
            },
            append (data) {
                const children = data.children || [];
                children.push({
                    title: 'appended node',
                    expand: true
                });
                this.$set(data, 'children', children);
            },
            remove (root, node, data) {
                const parentKey = root.find(el => el === node).parent;
                const parent = root.find(el => el.nodeKey === parentKey).node;
                const index = parent.children.indexOf(data);
                parent.children.splice(index, 1);
            }
        }
    }
</script>