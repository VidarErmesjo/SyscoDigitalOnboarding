import { SvgIcon, SvgIconProps } from '@material-ui/core';

export default function SyscoLogo({color, ...props}: SvgIconProps): JSX.Element {
    return (
        <SvgIcon
            fill={color}
            viewBox="0 0 581.667 120.333"
            {...props}
            >
            <path d="M4 39h24.667c.901-11.407 10.025-18 21-18 8.268 0 18.106 4.572 14.981 14.667C61.613 45.472 45.42 46.938 37 48.808c-8.79 1.952-18.155 4.77-25.333 10.415-10.98 8.634-14.39 24.18-9.65 37.11 5.193 14.162 20.664 21.096 34.65 23.09 23.806 3.396 50.856-5.121 57.456-30.756 1.036-4.022 1.874-8.168 1.877-12.334H71.667C69.882 90.44 60.225 98.603 46 98.666c-8.974.04-22.64-4.653-20.854-16 1.773-11.26 16.26-14.095 25.52-16.14C65.385 63.274 84.625 58.53 89.364 42c.86-2.997 1.3-6.218 1.304-9.333.004-3.452-.476-7.05-1.557-10.334C84.436 8.133 70.543 2.097 56.667.611 35.607-1.643 13.18 5.935 6 27.667 4.808 31.277 4.003 35.193 4 39m223.667 0h25c.27-13.138 12.551-18.493 24-17.987 7.874.348 14.447 6.873 11.75 14.987-3.137 9.436-18.588 10.694-26.75 12.628-8.61 2.04-17.738 4.463-25 9.758-11.691 8.525-15.673 24.484-10.769 37.947 5.173 14.201 20.812 21.1 34.769 23.09 23.645 3.373 49.683-4.888 57.093-29.756 1.263-4.238 2.149-8.908 2.24-13.334h-17.667c-1.57 0-5.184-.67-6.465.343-1.287 1.016-1.335 5.692-1.894 7.324a20.62 20.62 0 01-7.64 10.187c-7.843 5.506-20.462 5.962-29 1.885-6.951-3.319-11-11.397-6.484-18.405 4.508-6.997 14.654-8.927 22.15-10.791 14.82-3.687 33.577-7.018 39.729-23.21 1.115-2.934 1.426-5.903 1.634-9 .309-4.592-.146-9.313-1.773-13.666C304.582-.437 273.927-3.34 255 2.89c-4.555 1.5-8.898 3.687-12.667 6.665-9.768 7.719-12.513 17.848-14.666 29.445m218.666 36.333L437.667 75H421c-1.093 5.639-2.71 11.337-6.697 15.667-9.286 10.085-27.683 10.524-38.636 2.853-9.6-6.725-13.824-18.485-14.32-29.853-.527-12.043 1.75-26.207 11.32-34.57 9.89-8.645 28.41-10.81 39-1.988 5.66 4.714 7.973 11.215 9.333 18.224h16.667l8.666-.333c-3.113-12.92-6.156-24.095-16.666-33.237C410.15-5.21 373.063-3.72 354.333 13.697c-12.62 11.736-18.643 29.59-18.316 46.636.333 17.16 5.446 34.335 18.316 46.304 20.694 19.243 60.95 18.468 79.944-2.637 7.49-8.321 9.533-18.196 12.056-28.667m70-74.858C503.19 2.2 490.27 5.852 480.697 15.68c-21.494 22.062-22.174 67.555.303 89.307 13.467 13.03 33.573 16.777 51.667 14.585 13.466-1.633 26.22-7.208 35.236-17.572 18.007-20.695 18.44-59.221 2.13-81-12.01-16.04-34.153-23.093-53.7-20.525M125.333 2c4.483 10.767 10.747 21.503 16.475 31.667 1.845 3.272 3.593 6.64 5.274 10 .57 1.137 1.8 2.695 1.784 4-.022 1.83-2.462 4.23-3.486 5.666-3.063 4.302-6.049 8.66-9.055 13-8.178 11.809-16.489 23.525-24.667 35.334-3.652 5.274-8.836 10.751-11.325 16.666H122c2.656 0 6.827.794 9.302-.2 1.364-.548 2.058-2.31 2.813-3.466 1.965-3.01 4.052-5.946 5.949-9 7.069-11.378 16.543-22.227 22.27-34.334H163L168.584 83l11.832 23.333 4.333 8.667 2.048 3.132 8.203.201h19.667l-15.073-29-28.841-55L159.083 12l-5.295-9.657L146 2h-20.667m393.334 19.762c4.336-.532 9.106-.192 13.333.87 11.497 2.888 18.63 13.046 21.377 24.035 5.13 20.524-1.53 48.894-26.044 51.904-3.563.438-7.483.222-11-.441-35.193-6.638-33.466-71.971 2.334-76.368z"/>
        </SvgIcon>
    );
}