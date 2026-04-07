# Navigation Test Plan for Happy Little Harvest

## Application Overview

This test plan covers the comprehensive user journey through Happy Little Harvest application including: Home page with blog browsing, Find Growers with search and filtering, grower profile management (Test farm created by logged-in user), subscription workflows, My Growers page with events verification, Account management with grower profile and newsletter subscriptions, and sign out. It includes happy path scenarios, edge cases, and verification of UI elements and navigation.

## Test Scenarios

### 1. Core Navigation Suite

**Seed:** `tests/seed.spec.ts`

#### 1.1. Verify Home Page and Blog Navigation

**File:** `tests/navigation/home-page.spec.ts`

**Steps:**
  1. Navigate to the home page
    - expect: Page URL is https://happylittleharvest.com/
    - expect: Page title is 'Happy Little Harvest'
    - expect: Main heading 'Happy Little Harvest' is displayed
    - expect: Tagline 'Sharing experiences, little secrets, and the joy of growing your own food.' is visible
  2. Verify featured blog post section
    - expect: Featured blog post 'The Beginning!' is displayed with cover image and author info
    - expect: Publication date 'April 5, 2026' is shown
  3. Verify 'More Stories' section with multiple blog posts
    - expect: 'More Stories' heading is displayed
    - expect: At least 4 blog posts are visible: 'My Experience Growing Vegetables from Seeds', 'How to Start Growing Your Own Vegetables', 'Growing Plants from Seeds: A Simple Beginner's Guide', 'Things you need to start'
  4. Verify blog post card layout and content
    - expect: Each blog post shows title, category badge (Experience/Guide), publication date, excerpt, and author info
  5. Verify footer elements
    - expect: Footer sections are visible: 'Stay in the loop', legal links (Terms, Privacy, etc.), and social media links

#### 1.2. View Blog Post Detail Page

**File:** `tests/navigation/blog-detail-page.spec.ts`

**Steps:**
  1. Click on 'The Beginning!' blog post title or cover image
    - expect: Page navigates to https://happylittleharvest.com/posts/the-beginning
    - expect: Blog post title 'The Beginning!' is displayed as heading
  2. Verify blog post metadata
    - expect: Author name 'Deepa' with profile image is shown
    - expect: Publication date 'April 5, 2026' is displayed
  3. Verify blog post cover image
    - expect: Cover image for the blog post is displayed
  4. Verify blog post content is rendered correctly
    - expect: Blog post content with multiple paragraphs is visible and readable
  5. Identify navigation back to home
    - expect: 'Happy Little Harvest .' link at top of article is visible

#### 1.3. Navigate Through Multiple Blog Posts

**File:** `tests/navigation/navigate-blog-posts.spec.ts`

**Steps:**
  1. Navigate to home page
    - expect: Home page displays all blog posts in 'More Stories' section
  2. Click on 'My Experience Growing Vegetables from Seeds' blog post
    - expect: Page navigates to blog post detail page for 'My Experience Growing Vegetables from Seeds'
    - expect: URL is https://happylittleharvest.com/posts/my-experience-growing-from-seeds
  3. Verify blog post content loads correctly
    - expect: Blog post detail page loads with correct content and metadata
  4. Verify blog post renders properly
    - expect: User can read blog post content without errors
  5. Click on 'Happy Little Harvest' link to return to home
    - expect: Page navigates back to home page
    - expect: URL returns to https://happylittleharvest.com/
  6. Verify back navigation returns to home page
    - expect: Home page is displayed with all blog posts visible again

#### 1.4. Navigate Back to Home from Blog Posts

**File:** `tests/navigation/back-navigation.spec.ts`

**Steps:**
  1. Navigate to any blog post (e.g., 'How to Start Growing Your Own Vegetables')
    - expect: User is on a blog post detail page
  2. Verify back-to-home link availability
    - expect: 'Happy Little Harvest' link is present and clickable at top of blog article
  3. Click 'Happy Little Harvest' link
    - expect: Page URL changes to https://happylittleharvest.com/
    - expect: Home page content is fully loaded
  4. Verify home page content is restored
    - expect: All blog posts in 'More Stories' section are visible and clickable
  5. Navigate to blog post again and use browser back button
    - expect: Using browser back button also navigates to home page

#### 1.5. Verify Find Growers Page Functionality

**File:** `tests/navigation/find-growers.spec.ts`

**Steps:**
  1. Load the Find Growers page as per seed test
    - expect: Page URL is https://happylittleharvest.com/growers
    - expect: Page title is 'Happy Little Harvest'
    - expect: Heading 'Find Growers' is displayed
    - expect: Search fields for farm name, city, state/province, and country are present
    - expect: Filter buttons for crop categories (All, Dairy, etc.) are visible
    - expect: At least two grower listings visible: 'Test farm' (Dairy category) and 'Tester Farm 1' (Fruits & Vegetables categories)
  2. Enter text in 'Search by farm name' field and press Enter
    - expect: Search results update or no results message appears
  3. Click on a filter button, e.g., 'Dairy' to show Test farm
    - expect: Grower list filters to selected category
  4. Verify button states for different growers
    - expect: Subscribe button appears on unsubscribed growers

#### 1.6. View Own Grower Profile from Find Growers

**File:** `tests/navigation/view-own-grower-profile.spec.ts`

**Steps:**
  1. Navigate to Find Growers page
    - expect: Page URL is https://happylittleharvest.com/growers
    - expect: Test farm grower card is visible in the grower list
  2. Verify own grower profile card is displayed
    - expect: 'Test farm' grower is listed with location 'Sydney, NSW, Australia' and 'Dairy' crop category
  3. Verify interaction options on own grower card
    - expect: 'Subscribe' button is visible on the Test farm card
  4. Click on 'Test farm' grower name to view profile
    - expect: Page navigates to https://happylittleharvest.com/growers/{grower-id}
    - expect: Heading 'Test farm' is displayed
    - expect: Location 'Sydney, NSW, Australia' is shown
    - expect: Crop category 'Dairy' is listed
  5. Verify subscription button availability
    - expect: 'Subscribe' button is available on the profile page
  6. Verify events section on grower profile
    - expect: 'Upcoming Events' section is visible
    - expect: Text 'No upcoming events.' is displayed

#### 1.7. View and Update Grower Profile

**File:** `tests/navigation/grower-profile-management.spec.ts`

**Steps:**
  1. Navigate to Account page
    - expect: Page navigates to https://happylittleharvest.com/account
    - expect: Heading 'Account Settings' is displayed
  2. Verify Grower Profile section shows created profile
    - expect: 'Grower Profile' section shows 'Test farm' profile card with location 'Sydney, NSW, Australia' and 'Dairy' crop category
  3. Verify available actions for grower profile
    - expect: 'Update' link and 'Manage Events' link are available
  4. Click 'Update' link
    - expect: Page navigates to https://happylittleharvest.com/account/grower-profile
    - expect: Heading 'Grower Profile' is displayed
  5. Verify grower profile form is populated
    - expect: Form fields are pre-filled with current profile data: Farm Name = 'Test farm', City = 'Sydney', State/Province = 'NSW', Country = 'Australia'
  6. Verify crop category selection
    - expect: 'Dairy' crop category button appears selected/active
    - expect: Other crop category buttons (Fruits, Vegetables, etc.) are available
  7. Verify form actions
    - expect: 'Update Profile' button and 'Cancel' link are present
  8. Click 'Cancel' link to return without updating
    - expect: Page navigates back to /account

#### 1.8. Manage Grower Events

**File:** `tests/navigation/manage-grower-events.spec.ts`

**Steps:**
  1. Navigate to Account page
    - expect: Page navigates to https://happylittleharvest.com/account
    - expect: Heading 'Account Settings' is displayed
  2. Verify Manage Events link availability
    - expect: 'Manage Events' link is visible in Grower Profile section
  3. Click 'Manage Events' link
    - expect: Page navigates to https://happylittleharvest.com/account/grower-profile/events
    - expect: Heading 'My Events' is displayed
    - expect: Description 'Create and manage events to share your produce with the community.' is shown
  4. Verify events management page when empty
    - expect: '+ Create Event' button is visible
    - expect: Message 'No events yet — create your first event.' is displayed
  5. Verify create event button is available
    - expect: Button displays text '+ Create Event'

#### 1.9. Complete Subscribe/Unsubscribe Workflow with Grower Events Verification

**File:** `tests/navigation/subscription-workflow.spec.ts`

**Steps:**
  1. Navigate to Find Growers page
    - expect: Page URL is https://happylittleharvest.com/growers
    - expect: Subscription count shows '1/5 subscribed' (Tester Farm 1 is already subscribed)
    - expect: 'Subscribe' button is visible on Test farm grower card
  2. Click 'Subscribe' button on Test farm grower listing
    - expect: Subscription count updates to '2/5 subscribed'
    - expect: Button text changes from 'Subscribe' to 'Unsubscribe'
    - expect: 'Subscribed' badge appears next to 'Test farm' grower name
  3. Click 'My Growers' link to navigate to My Growers page
    - expect: Page navigates to https://happylittleharvest.com/account/growers
    - expect: Heading 'My Growers' is displayed
    - expect: Grower count displays '2/5 growers'
  4. Verify subscribed growers appear on My Growers page
    - expect: 'Test farm' grower card is visible on the page
    - expect: 'View profile' link is available for Test farm
    - expect: Both 'Test farm' and 'Tester Farm 1' grower cards are displayed
  5. Verify events section for own grower profile
    - expect: 'Test farm' section shows 'No upcoming events.' message since no events have been created yet
  6. Verify other subscribed grower's events are displayed
    - expect: 'Tester Farm 1' grower shows events: 'Fresh mandarins available for testing!' (May 5—31) and 'Fresh Apples available for testing!' (Apr 1—30)
  7. Click 'Find Growers' link in navigation to return
    - expect: Page navigates back to https://happylittleharvest.com/growers
    - expect: Heading 'Find Growers' is displayed
  8. Verify subscription status is maintained
    - expect: Subscription count still shows '2/5 subscribed'
    - expect: 'Unsubscribe' button is displayed for Test farm
  9. Click 'Unsubscribe' button on Test farm grower listing
    - expect: Subscription count updates to '1/5 subscribed'
    - expect: Button text changes from 'Unsubscribe' to 'Subscribe'
    - expect: 'Subscribed' badge disappears from 'Test farm' grower name
  10. Click 'My Growers' link to verify removal
    - expect: Page navigates to https://happylittleharvest.com/account/growers
    - expect: Heading 'My Growers' is displayed
    - expect: Grower count displays '1/5 growers'
  11. Verify own grower profile is removed from subscribed list
    - expect: 'Test farm' grower card is no longer visible
    - expect: Only 'Tester Farm 1' grower card remains
  12. Confirm other subscribed grower's events remain
    - expect: 'Tester Farm 1' events are still visible

#### 1.10. Navigate and Verify My Growers Page

**File:** `tests/navigation/my-growers.spec.ts`

**Steps:**
  1. Click on 'My Growers' link in navigation
    - expect: Page navigates to https://happylittleharvest.com/account/growers
    - expect: Heading 'My Growers' is displayed
  2. Verify content when growers are subscribed
    - expect: Displays '1/5 growers' (Tester Farm 1 is subscribed)
    - expect: Grower 'Tester Farm 1' is visible with events
    - expect: Link to '+ Find more growers' is available
  3. Click '+ Find more growers' link
    - expect: Link navigates to Find Growers page

#### 1.11. Navigate and Verify Account Page

**File:** `tests/navigation/account.spec.ts`

**Steps:**
  1. Click on 'Account' link in navigation
    - expect: Page navigates to https://happylittleharvest.com/account
    - expect: Heading 'Account Settings' is displayed
  2. Verify user information display
    - expect: User name 'auto-tester' and email 'hello+autotester@happylittleharvest.com' are shown
  3. Check Grower Profile section with existing profile
    - expect: 'Grower Profile' section displays 'Test farm' profile (not 'No Profile')
    - expect: 'Test farm' shows location 'Sydney, NSW, Australia' and crop category 'Dairy'
  4. Verify grower profile actions
    - expect: 'Update' link to modify profile and 'Manage Events' link are available
  5. Verify Newsletter Subscriptions status
    - expect: 'Newsletter Subscriptions' section lists 'Weekly Digest' and 'Product Updates'
    - expect: Both show status 'Subscribed' with 'Unsubscribe' buttons
  6. Check Danger Zone section
    - expect: 'Danger Zone' section has 'Delete Account' button
  7. Test unsubscribe from newsletter
    - expect: Clicking Unsubscribe toggles to 'Not subscribed' or shows success message

#### 1.12. Sign Out Process

**File:** `tests/navigation/sign-out.spec.ts`

**Steps:**
  1. Click 'Sign out' button in navigation
    - expect: Page redirects to https://happylittleharvest.com/
    - expect: Navigation menu changes to show 'Sign in' link
  2. Navigate to /account URL after sign out (edge case)
    - expect: Attempting to access /account redirects to login or shows error

#### 1.13. Close Website

**File:** `tests/navigation/close.spec.ts`

**Steps:**
  1. Close the browser tab or window
    - expect: Browser window closes without errors
