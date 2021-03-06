import { EventData } from "tns-core-modules/data/observable";
import { SubMainPageViewModel } from "../sub-main-page-view-model";
import { WrapLayout } from "tns-core-modules/ui/layouts/wrap-layout";
import { Page } from "tns-core-modules/ui/page";

export function pageLoaded(args: EventData) {
    const page = <Page>args.object;
    const wrapLayout = <WrapLayout>page.getViewById("wrapLayout");
    page.bindingContext = new SubMainPageViewModel(wrapLayout, loadExamples());
}

export function loadExamples() {
    const examples = new Map<string, string>();
    examples.set("flexboxall", "flexbox/flexbox");
    examples.set("flexboxcss", "flexbox/flexbox-css");
    examples.set("flexboxdemo", "flexbox/flexbox-demo");
    examples.set("flexrepeat", "flexbox/flexbox-repeater");
    examples.set("flex-perf", "flexbox/flexbox-perf-comparison");
    examples.set("flexbox-4143", "flexbox/flexbox-4143");
    examples.set("flexbox-4834", "flexbox/flexbox-4834");

    return examples;
}