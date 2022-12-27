import Text "mo:base/Text";

actor {
  public query func home() : async Text {
    return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque faucibus elementum velit, nec fringilla eros mollis a. Etiam non lacus rutrum, finibus neque nec, malesuada turpis. Integer dignissim id metus quis pharetra. Nam fermentum ultrices nibh, at mattis mi. Aenean quis cursus libero. Nunc dignissim quam eu dui vehicula pulvinar. Ut vulputate, ante sit amet semper luctus, nulla ante dignissim odio, non vestibulum eros enim vitae leo. Donec placerat, erat eu elementum malesuada, nibh lectus gravida nisl, sed varius nisi erat in enim. Pellentesque iaculis, ex in dictum pulvinar, lacus magna pretium velit, in fringilla felis lorem sed est.";
  };

  public query func page() : async Text {
    return "Morbi volutpat nibh non diam iaculis, vitae rutrum sapien pulvinar. Morbi sit amet erat eget ante consectetur hendrerit. Maecenas sed finibus augue, a hendrerit sem. Nulla eleifend tincidunt hendrerit. Pellentesque eget ex sed dolor molestie elementum. Sed posuere metus eu porttitor mollis. Cras purus dui, maximus a mi sed, fringilla posuere nisi. Morbi nec erat sem. Pellentesque nisi mi, mattis vitae mi nec, ornare ullamcorper nulla. Phasellus id metus ac eros volutpat semper.";
  };

  public query func about() : async Text {
    return "Nam tincidunt gravida massa ut convallis. Sed posuere, est ac lacinia egestas, dui diam facilisis eros, id scelerisque magna magna id arcu. Sed rhoncus mi vel quam interdum blandit. Praesent imperdiet nulla sit amet augue dictum feugiat. Donec vel ligula sit amet ipsum commodo auctor. Nunc egestas malesuada iaculis. In et sem eu mauris tincidunt fringilla. In lacinia vel nisl at vestibulum. Cras commodo eu nisl in lobortis. Fusce imperdiet quam ligula, in dapibus nisl sagittis sit amet. Morbi odio dolor, finibus ut eleifend quis, laoreet at dui. Sed eget sollicitudin diam, non fermentum diam.";
  };  
};
