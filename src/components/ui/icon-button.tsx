import { IconType } from "@/lib/icon-type";

interface IconButtonProps {
    Icon: IconType;
    handleButtonClick?: () => void;
}

/**
 * Icon button component.
 * @param dataTestId - Data test id of the button for E2E tests.
 * @param icon - Icon that will be displayed on the button.
 * @param haveNotification - If the button handles with some interaction that have notifications.
 * @param handleButtonClick - Function that will be called when the button is clicked.
 */
export const IconButton = ({
    Icon,
    handleButtonClick,
}: IconButtonProps) => {
    return (
        <button
            className="
                relative
                flex
                h-11
                w-11
                cursor-pointer
                items-center
                justify-center
                rounded-full
                border
                border-divider
                bg-transparent
                transition-all
                duration-200
                hover:-translate-y-1
                hover:border-tertiary
                focus:outline-none
                focus:ring-2
                focus:ring-complementary/80
                focus:ring-offset-2
                focus:ring-offset-background
            "
            onClick={handleButtonClick}
        >
            <div className="relative">
                <Icon className="h-5 w-5 text-ribbon-900" />
               
            </div>
        </button>
    );
};