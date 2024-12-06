import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://lime-mosul-uat.madiro.org/openmrs/spa/login');
  await page.getByLabel('Username').fill('tester');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByLabel('Password').fill('Tester123!');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByText('Mental Health (MH').click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.goto('http://lime-mosul-uat.madiro.org/openmrs/spa/patient/4aa1d485-5904-4b17-8bed-3affd38e95e7');
  await page.getByLabel('Start a visit').click();
  await page.getByText('OPD Visit').click();
  await page.getByRole('button', { name: 'Start visit' }).click();
  await page.getByLabel('Clinical forms').click();
  await page.getByText('MSF Mental Health - MHPSS Baseline').click();
  await page.getByRole('group', { name: 'Admission type' }).locator('span').nth(1).click();
  await page.locator('label').filter({ hasText: /^Male$/ }).locator('span').first().click();
  await page.getByLabel('How many people live with the').click();
  await page.getByLabel('How many people live with the').fill('3');
  await page.getByText('Family', { exact: true }).click();
  await page.getByLabel('Total number of beneficiaries').click();
  await page.getByLabel('Total number of beneficiaries').fill('2');
  await page.getByRole('group', { name: 'Consultation done by' }).locator('span').nth(1).click();
  await page.locator('label').filter({ hasText: 'MSF Health Facility' }).locator('span').first().click();
  await page.getByLabel('Specify MSF Health Facility').click();
  await page.getByLabel('Specify MSF Health Facility').fill('B');
  await page.getByRole('group', { name: 'Type of intervention' }).locator('span').nth(1).click();
  await page.locator('label').filter({ hasText: 'MSF IPD' }).locator('span').first().click();
  await page.getByLabel('Main problem or reason for').click();
  await page.getByLabel('Main problem or reason for').fill('T');
  await page.getByLabel('PsychosomaticTotal items').click();
  await page.getByText('Eating disorder').click();
  await page.getByText('Sexual disorder').click();
  await page.getByText('Sleep disorder').click();
  await page.getByRole('combobox', { name: 'Psychosomatic Total items' }).click();
  await page.locator('[id="accordion-item-\\:r4d\\:"]').click();
  await page.getByText('Constant stress').click();
  await page.getByText('Excessive fear/phobia').click();
  await page.locator('[id="accordion-item-\\:r4d\\:"]').click();
  await page.locator('[id="accordion-item-\\:r4d\\:"]').click();
  await page.getByTitle('Close').click();
  await page.getByLabel('Trauma relatedTotal items').click();
  await page.getByText('Child has stopped talking').click();
  await page.getByLabel('Hallucinations').locator('div').first().click();
  await page.getByTitle('Close').click();
  await page.locator('div:nth-child(5) > div > .-esm-form-engine__multi-select__boldedLabel___nLptk > .cds--layer-two > .cds--multi-select__wrapper > .cds--multi-select > .cds--list-box__field > .cds--list-box__menu-icon').first().click();
  await page.getByLabel('Auditory hallucinations').locator('div').first().click();
  await page.getByLabel('Disorganized thoughts').locator('div').first().click();
  await page.getByTitle('Close').click();
  await page.getByLabel('Neurocognitive problemsTotal').click();
  await page.getByText('Delayed milestones').click();
  await page.getByText('Epileptic seizure').click();
  await page.getByText('Lack of concentration').click();
  await page.getByTitle('Close').click();
  await page.getByLabel('Behavior problemsTotal items').click();
  await page.getByText('Child behavioral problem').click();
  await page.getByText('Impulsiveness').click();
  await page.getByTitle('Close').click();
  await page.getByLabel('Other symptomsTotal items').click();
  await page.locator('[id="Other\\ symptoms-item-0-item"]').click();
  await page.getByLabel('If other, specify').click();
  await page.getByLabel('If other, specify').fill('T');
  await page.getByText('Sleep disorder').nth(1).click();
  await page.getByText('Feeling constantly worried').nth(2).click();
  await page.locator('label').filter({ hasText: 'Auditory hallucinations' }).nth(2).click();
  await page.getByText('Psychosomatic symptoms').click();
  await page.getByText('- 7 days').click();
  await page.getByLabel('Important details of the main').click();
  await page.getByLabel('Important details of the main').fill('t');
  await page.getByLabel('Patient presentationHow do').click();
  await page.getByLabel('Patient presentationHow do').fill('s');
  await page.getByRole('combobox', { name: 'Clinical diagnosis (only to' }).click();
  await page.getByText('Grief').click();
  await page.locator('[id="accordion-item-\\:r4g\\:"] > .-esm-form-engine__page-renderer__formSection___NMgiH > .-esm-form-engine__section-renderer__section___m5psJ > div:nth-child(2) > div > .cds--fieldset > .cds--form-item > .cds--radio-button-group > div:nth-child(2) > .cds--radio-button__label > .cds--radio-button__label-text').click();
  await page.getByRole('group', { name: 'Did you have problems getting' }).locator('label').nth(2).click();
  await page.locator('[id="accordion-item-\\:r4g\\:"] > .-esm-form-engine__page-renderer__formSection___NMgiH > .-esm-form-engine__section-renderer__section___m5psJ > div:nth-child(4) > div > .cds--fieldset > .cds--form-item > .cds--radio-button-group > div:nth-child(3) > .cds--radio-button__label > .cds--radio-button__appearance').click();
  await page.locator('div:nth-child(5) > div > .cds--fieldset > .cds--form-item > .cds--radio-button-group > div:nth-child(3) > .cds--radio-button__label > .cds--radio-button__appearance').first().click();
  await page.locator('div:nth-child(6) > div > .cds--fieldset > .cds--form-item > .cds--radio-button-group > div:nth-child(3) > .cds--radio-button__label > .cds--radio-button__appearance').first().click();
  await page.locator('div:nth-child(7) > div > .cds--fieldset > .cds--form-item > .cds--radio-button-group > div:nth-child(3) > .cds--radio-button__label > .cds--radio-button__appearance').first().click();
  await page.locator('[id="accordion-item-\\:r4h\\:"] > .-esm-form-engine__page-renderer__formSection___NMgiH > .-esm-form-engine__section-renderer__section___m5psJ > div:nth-child(2) > div > .cds--fieldset > .cds--form-item > .cds--radio-button-group > div:nth-child(2) > .cds--radio-button__label > .cds--radio-button__appearance').click();
  await page.locator('[id="accordion-item-\\:r4h\\:"] > .-esm-form-engine__page-renderer__formSection___NMgiH > .-esm-form-engine__section-renderer__section___m5psJ > div > div > .cds--fieldset > .cds--form-item > .cds--radio-button-group > div:nth-child(2) > .cds--radio-button__label > .cds--radio-button__appearance').first().click();
  await page.locator('[id="accordion-item-\\:r4h\\:"] > .-esm-form-engine__page-renderer__formSection___NMgiH > .-esm-form-engine__section-renderer__section___m5psJ > div:nth-child(3) > div > .cds--fieldset > .cds--form-item > .cds--radio-button-group > div:nth-child(3) > .cds--radio-button__label > .cds--radio-button__appearance').click();
  await page.locator('[id="accordion-item-\\:r4h\\:"] > .-esm-form-engine__page-renderer__formSection___NMgiH > .-esm-form-engine__section-renderer__section___m5psJ > div:nth-child(5) > div > .cds--fieldset > .cds--form-item > .cds--radio-button-group > div:nth-child(3) > .cds--radio-button__label > .cds--radio-button__appearance').click();
  await page.locator('[id="accordion-item-\\:r4h\\:"] > .-esm-form-engine__page-renderer__formSection___NMgiH > .-esm-form-engine__section-renderer__section___m5psJ > div:nth-child(6) > div > .cds--fieldset > .cds--form-item > .cds--radio-button-group > div:nth-child(3) > .cds--radio-button__label > .cds--radio-button__appearance').click();
  await page.locator('div:nth-child(8) > div > .cds--fieldset > .cds--form-item > .cds--radio-button-group > div:nth-child(2) > .cds--radio-button__label > .cds--radio-button__appearance').click();
  await page.locator('[id="accordion-item-\\:r4h\\:"] > .-esm-form-engine__page-renderer__formSection___NMgiH > .-esm-form-engine__section-renderer__section___m5psJ > div:nth-child(7) > div > .cds--fieldset > .cds--form-item > .cds--radio-button-group > div:nth-child(2) > .cds--radio-button__label > .cds--radio-button__appearance').click();
  await page.locator('[id="accordion-item-\\:r4h\\:"] > .-esm-form-engine__page-renderer__formSection___NMgiH > .-esm-form-engine__section-renderer__section___m5psJ > div:nth-child(9) > div > .cds--fieldset > .cds--form-item > .cds--radio-button-group > div:nth-child(2) > .cds--radio-button__label > .cds--radio-button__appearance').click();
  await page.getByRole('combobox', { name: 'Depression severity scale' }).click();
  await page.getByText('Minor to mild depression (or').click();
  await page.getByText('- Moderately ill').click();
  await page.getByRole('group', { name: 'Positive functionality Is the' }).locator('label').first().click();
  await page.getByRole('group', { name: 'Internal resources Does the' }).locator('span').nth(1).click();
  await page.getByRole('group', { name: 'External resources Does the' }).locator('span').nth(3).click();
  await page.getByRole('group', { name: 'Has the patient had thoughts' }).locator('span').nth(1).click();
  await page.getByLabel('Frequency').click();
  await page.getByLabel('Frequency').fill('4');
  await page.getByRole('group', { name: 'Has the patient hurt' }).locator('span').nth(1).click();
  await page.getByLabel('Type of behavior and frequency').click();
  await page.getByLabel('Type of behavior and frequency').fill('V');
  await page.getByRole('group', { name: 'Has the patient attempted' }).locator('span').nth(1).click();
  await page.getByLabel('Number of attempts and method').click();
  await page.getByLabel('Number of attempts and method').fill('3');
  await page.getByRole('group', { name: 'Is the patient currently at risk of hurting himself/herself or attempting' }).locator('span').nth(1).click();
  await page.getByLabel('Action taken to reduce risk').click();
  await page.getByLabel('Action taken to reduce risk').fill('N');
  await page.getByRole('group', { name: 'Is the patient currently at risk of hurting others' }).locator('span').nth(1).click();
  await page.getByLabel('Action taken to reduce risk of hurting othersConsider referral to mhGAP').click();
  await page.getByLabel('Action taken to reduce risk of hurting othersConsider referral to mhGAP').fill('N');
  await page.getByRole('group', { name: 'Does the patient regularly' }).locator('label').first().click();
  await page.getByLabel('Type of substance and').click();
  await page.getByLabel('Type of substance and').fill('Cigarette');
  await page.getByRole('group', { name: 'Is the patient currently on' }).locator('span').nth(1).click();
  await page.getByRole('group', { name: 'Prescribed by' }).locator('span').nth(1).click();
  await page.getByRole('group', { name: 'Has the patient experienced' }).locator('span').nth(1).click();
  await page.locator('div:nth-child(16) > div > .cds--fieldset > .cds--form-item > .cds--radio-button-group > div:nth-child(2) > .cds--radio-button__label > .cds--radio-button__appearance').click();
  await page.locator('div:nth-child(18) > div > .cds--fieldset > .cds--form-item > .cds--radio-button-group > div:nth-child(5) > .cds--radio-button__label > .cds--radio-button__appearance').click();
  await page.locator('#patientExperiencedAnActOfAggressionOrViolenceWhatTypeOfViolence_ifOtherSpecify2').click();
  await page.locator('#patientExperiencedAnActOfAggressionOrViolenceWhatTypeOfViolence_ifOtherSpecify2').fill('Test');
  await page.getByText('Psychological Violence').nth(2).click();
  await page.getByText('Less than 1 month').click();
  await page.getByRole('group', { name: 'Would the patient like a' }).locator('span').nth(1).click();
  await page.getByLabel('Action taken', { exact: true }).click();
  await page.getByLabel('Action taken', { exact: true }).fill('None');
  await page.getByLabel('Medical conditionsTotal items').click();
  await page.getByText('Highly stigmatizing disease (').click();
  await page.getByText('Family member with a serious').click();
  await page.locator('[id="accordion-item-\\:r4l\\:"]').click();
  await page.getByLabel('ViolenceTotal items selected: :').click();
  await page.getByText('Child marriage').click();
  await page.getByLabel('Domestic violence').locator('div').first().click();
  await page.getByTitle('Close').click();
  await page.getByLabel('Separation or lossTotal items').click();
  await page.getByLabel('Family member killed or').locator('div').first().click();
  await page.getByText('Divorce/separation').click();
  await page.getByTitle('Close').click();
  await page.getByLabel('DisasterTotal items selected: :').click();
  await page.getByText('Road accident').click();
  await page.getByTitle('Close').click();
  await page.getByLabel('OtherTotal items selected: :').click();
  await page.locator('#Other-item-2-item').click();
  await page.locator('[id="accordion-item-\\:r4l\\:"] > .-esm-form-engine__page-renderer__formSection___NMgiH > .-esm-form-engine__section-renderer__section___m5psJ').click();
  await page.locator('#pastOrPrecipitatingEvents_ifOtherSpecify').click();
  await page.locator('#pastOrPrecipitatingEvents_ifOtherSpecify').fill('Other ');
  await page.getByText('Domestic violence').nth(1).click();
  await page.locator('[id="accordion-item-\\:rdk\\:"] label').filter({ hasText: 'Other' }).nth(1).click();
  await page.getByText('Domestic violence').nth(3).click();
  await page.getByLabel('Relevant details of the past').click();
  await page.getByLabel('Relevant details of the past').fill('T');
  await page.getByLabel('Overall goals for therapyWhat').click();
  await page.getByLabel('Overall goals for therapyWhat').fill('T');
  await page.getByLabel('Todays Session (what did you').click();
  await page.getByLabel('Todays Session (what did you').fill('Test');
  await page.getByLabel('Homework (what will the').click();
  await page.getByLabel('Homework (what will the').fill('T');
  await page.getByRole('group', { name: 'Follow up session required (' }).locator('label').first().click();
  await page.getByLabel('yyyy').click();
  await page.getByLabel('', { exact: true }).click();
  await page.getByRole('gridcell', { name: 'Friday 6 December' }).click();
  await page.getByRole('group', { name: 'Referral done' }).locator('label').first().click();
  await page.locator('label').filter({ hasText: 'Non-MSF psychiatrist services' }).locator('span').first().click();
  await page.getByLabel('Reason for referral', { exact: true }).click();
  await page.locator('[id="page-Intervention\\&follow-up-6"] label').filter({ hasText: 'Other' }).locator('span').first().click();
  await page.locator('#typeOfReferral_ifOtherSpecify').click();
  await page.locator('#typeOfReferral_ifOtherSpecify').fill('External');
  await page.locator('#typeOfReferral_ifOtherSpecify').press('Tab');
  await page.getByLabel('Reason for referral', { exact: true }).fill('Depression Severe');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByLabel('End visit').click();
  await page.getByRole('button', { name: 'danger End Visit' }).click();
});