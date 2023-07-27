type Styles = {
    [key: string]: string | number;
  };
  
type AnimationConfig = {
[key: string]: {
    start: string | number;
    end: string | number;
};
};

export { Styles, AnimationConfig }