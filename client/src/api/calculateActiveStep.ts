import config from './config';
import { getCategories, getCategoryFromRoute, getCategoryOffsets, getPagesFromRoute, getRouteFromStep, getRoutes } from '../api';

/**
 * Calculates correct offset for use with Material UI Stepper-component.
 * @param currentStep Current user position.
 */
export default function calculateActiveStep(currentStep: number | undefined): number {
    const category = getCategoryFromRoute(getRouteFromStep(currentStep));
    const categories = getCategories();

    const index = categories.indexOf(config.find(({ id }) => id === category.id)!);
    const offset = currentStep! - getCategoryOffsets()
        .splice(0, index)
        .reduce((a, b) => { return a + b }, 0);

    return offset;
}