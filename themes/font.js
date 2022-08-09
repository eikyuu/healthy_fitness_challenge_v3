import Metrics from './metrics';

const size = {
    font6 : Metrics.screenWidth * 0.035,
    font8 : Metrics.screenWidth * 0.04,
    font10 : Metrics.screenWidth * 0.045,
    font12 : Metrics.screenWidth * 0.05,
    font14 : Metrics.screenWidth * 0.055,
    font16 : Metrics.screenWidth * 0.06,
    font18 : Metrics.screenWidth * 0.065,
    font20 : Metrics.screenWidth * 0.07 
}

const weight = {
    thin : '100',
    light : '300',
    regular : '400',
    medium : '500',
    semiBold : '600',
    bold : '700'
}

const type = {
    regular : 'System',
    bold : 'System'
}

const font = {
    size,
    weight,
    type
}

export default font;