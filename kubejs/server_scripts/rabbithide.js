ServerEvents.recipes(event => {
    event.remove({
        output: 'minecraft:leather'
    });
    event.shapeless(
        '4x minecraft:rabbit_hide',
        [
            'minecraft:leather',
            'minecraft:leather'
        ]
    );
});