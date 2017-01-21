import React, { Component } from 'react';

export default class Setting extends Component {
    render() {
        return (
            <svg className={this.props.className} htmlFor={this.props.htmlFor} viewBox="0 0 128 128">
                <g>
                    <circle cx="64" cy="64" r="64" fill={this.props.outerColor} />
                    <path fill={this.props.innerColor} d="M119.78,73.778l-4.563-4.901c0.005-0.043,0.004-0.085-0.001-0.149c0.098-1.093,0.163-2.194,0.206-3.296  c0.01-0.318-0.003-0.658,0.003-0.976c0.009-0.845-0.003-1.662-0.041-2.478c-0.016-0.357-0.035-0.689-0.058-1.044  c-0.019-0.545-0.047-1.083-0.088-1.652l4.576-4.867c2.183-2.325,6.146-5.412,4.933-8.351l-5.01-12.157  c-1.213-2.942-6.194-2.325-9.379-2.436l-6.681-0.241c-0.505-0.604-1.049-1.178-1.572-1.761c-0.02-0.022-0.044-0.056-0.069-0.087  c-0.186-0.195-0.343-0.407-0.531-0.599c-0.283-0.308-0.609-0.602-0.901-0.902c-0.423-0.426-0.844-0.859-1.278-1.271  c-0.712-0.685-1.463-1.331-2.203-1.972c-0.03-0.031-0.078-0.057-0.104-0.078c-0.04-0.039-0.076-0.083-0.116-0.123l-0.216-6.693  c-0.098-3.169,0.525-8.159-2.397-9.375L82.129,3.308c-2.926-1.218-6.034,2.747-8.352,4.91L68.88,12.79  c-1.098-0.11-2.188-0.167-3.279-0.209c-0.305-0.012-0.612-0.006-0.938-0.004c-0.703-0.006-1.412-0.027-2.135,0.001  c-0.913,0.029-1.826,0.086-2.736,0.165c-0.117,0.006-0.234,0.006-0.326,0.014c-0.065,0.013-0.114,0.003-0.18,0.016l-4.871-4.586  c-2.321-2.171-5.412-6.146-8.351-4.935L33.907,8.262c-2.942,1.212-2.32,6.205-2.437,9.381l-0.237,6.691  c-0.073,0.055-0.146,0.131-0.214,0.198c-0.799,0.666-1.583,1.354-2.345,2.07c-0.281,0.276-0.552,0.554-0.827,0.833  c-0.541,0.527-1.084,1.071-1.603,1.63c-0.266,0.29-0.511,0.584-0.77,0.88c-0.352,0.382-0.696,0.759-1.033,1.162l-6.697,0.205  c-3.169,0.099-8.159-0.524-9.375,2.399l-5.063,12.16c-1.217,2.927,2.742,6.024,4.905,8.342l4.573,4.898  c-0.074,0.758-0.107,1.512-0.149,2.279c0.001,0.071-0.012,0.146-0.01,0.217c-0.062,1.3-0.093,2.598-0.048,3.892  c0.021,0.568,0.063,1.126,0.099,1.693c0.033,0.458,0.043,0.924,0.086,1.381c-0.003,0.05,0.001,0.096,0.005,0.13l-4.582,4.884  c-2.172,2.317-6.15,5.399-4.939,8.337l5.01,12.157c1.213,2.944,6.209,2.331,9.385,2.447l6.687,0.227  c0.045,0.066,0.099,0.105,0.147,0.173c0.678,0.814,1.39,1.609,2.132,2.409c0.261,0.281,0.537,0.522,0.802,0.798  c0.545,0.553,1.094,1.1,1.662,1.633c0.279,0.242,0.574,0.495,0.856,0.756c0.395,0.349,0.779,0.705,1.175,1.023l0.204,6.696  c0.1,3.169-0.52,8.171,2.404,9.388l12.16,5.062c2.928,1.219,6.023-2.743,8.341-4.906l4.902-4.562  c0.054,0.001,0.106-0.006,0.16-0.005c0.631,0.07,1.257,0.094,1.883,0.126c0.188,0.016,0.37,0.017,0.548,0.036  c0.294,0.009,0.576,0.032,0.86,0.042c0.336,0.007,0.671-0.003,1.007-0.002c0.817,0.019,1.635,0.002,2.445-0.035  c0.353-0.012,0.714-0.039,1.063-0.059c0.551-0.024,1.082-0.051,1.624-0.083l4.879,4.57c2.324,2.183,5.399,6.151,8.337,4.938  l12.158-5.01c2.943-1.214,2.335-6.199,2.447-9.385l0.23-6.676c0.573-0.478,1.125-0.976,1.658-1.462  c0.075-0.087,0.161-0.148,0.243-0.217c0.186-0.176,0.385-0.324,0.545-0.493c0.324-0.287,0.603-0.604,0.898-0.89  c0.422-0.427,0.87-0.854,1.299-1.301c0.623-0.669,1.25-1.369,1.856-2.098c0.069-0.065,0.123-0.12,0.182-0.205  c0.051-0.045,0.082-0.075,0.111-0.11l6.691-0.215c3.169-0.099,8.171,0.521,9.388-2.403l5.062-12.16  C125.91,79.203,121.942,76.096,119.78,73.778z M90.75,64c0,14.773-11.977,26.75-26.75,26.75S37.25,78.773,37.25,64  S49.227,37.25,64,37.25S90.75,49.227,90.75,64z" />
                </g>
            </svg>
        );
    }
}