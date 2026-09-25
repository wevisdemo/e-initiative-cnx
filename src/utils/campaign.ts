import dayjs from 'dayjs';
import Config from '../../e-initiative.config.mjs';

const { endDate } = Config.petition;

export const isCampaignEnded = !!endDate && dayjs().diff(endDate, 'days') > 0;
